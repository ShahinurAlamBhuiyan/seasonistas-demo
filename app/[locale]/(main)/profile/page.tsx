"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

import { MdOutlineAddAPhoto } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  Dialog,
  IconButton,
  Input,
  Radio,
  Switch,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import { AppLayout } from "~/components/AppLayout/AppLayout";
import { TitleMark } from "~/components/decorations";
import { Button } from "~/components/Button/Button";
import { apiRoutes } from "~/app/api-routes";
import { useCurrentUser } from "~/app/hooks/useCurrentUser";
import { produce } from "immer";
import clsx from "clsx";
import { IconX } from "@tabler/icons-react";
import { renderExpDurationString } from "~/app/utils/misc";

function ProfilePictureUpdater({ disabled = false }: { disabled?: boolean }) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Invalid file. Please upload an image.");
        return;
      }
    } else {
      toast.error("No file selected.");
    }
  };

  return (
    <div
      className={
        "md:w-36 md:h-36 lg:mb-0 w-24 h-24 rounded-full bg-blue-500 shadow-xl overflow-hidden relative group border-white border-3"
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={"/profile_empty_gradient.png"}
        alt="Profile"
        className="w-full h-full rounded-full object-cover"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className={
          "group-hover:opacity-100 opacity-0 transition-opacity bg-black/70 text-white absolute inset-0 flex items-center justify-center gap-x-2 font-bold text-sm"
        }
        disabled={disabled}
      >
        <MdOutlineAddAPhoto size={28} /> Change
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
        disabled={disabled}
      />
    </div>
  );
}

function UpdateNameSection({
  user,
  userLoading,
  onUpdate,
}: {
  user: any;
  userLoading: boolean;
  onUpdate: () => void;
}) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setName(user?.["fullName"] || "");
  }, [user]);

  const handleProfileSave = async () => {
    if (!name || name.trim() === "") {
      toast.error("Please enter a valid user name");
      return;
    }

    setLoading(true);
    apiRoutes
      .updateProfile({ fullName: name })
      .then(() => {
        toast.success("Name updated");
        onUpdate();
      })
      .catch(() => {
        toast.error("Failed to update name");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Profile Information
      </h2>
      <div className="flex  flex-col space-y-4">
        <div className="flex flex-row items-center gap-8">
          <ProfilePictureUpdater disabled={loading} />
          <div className="">
            <h2 className="text-3xl font-semibold text-gray-900">
              {user?.fullName}
            </h2>
            <p className="text-2xl text-gray-500">{user?.email}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 text-gray-700 rounded-md p-2"
            />
          </div>

          <div className="flex space-x-4">
            <Button
              onClick={() => handleProfileSave()}
              loading={loading || userLoading}
              className="px-4 py-2 mt-2 bg-primary text-teal rounded-md hover:bg-primary/80"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function UpdateBioSection({
  user,
  userLoading,
  onUpdate,
}: {
  user: any;
  userLoading: boolean;
  onUpdate: () => void;
}) {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("bio", user?.["bio"] || "");
    setValue("gender", user?.["gender"] || "");

    setValue("addressCountry", user?.["addressCountry"] || "");
    setValue("addressCity", user?.["addressCity"] || "");
    setValue("addressArea", user?.["addressArea"] || "");
    setValue("addressZip", user?.["addressZip"] || "");

    setValue("phone", user?.["phone"] || "");
  }, [user]);

  const [loading, setLoading] = useState(false);

  function onSubmit(payload) {
    payload = {
      ...payload,
      bio: payload.bio || "",
    };

    setLoading(true);
    apiRoutes
      .updateProfile(payload)
      .then(() => {
        toast.success("Bio updated");
        onUpdate();
      })
      .catch(() => {
        toast.error("Failed to update bio");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Update Bio</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
        <Textarea {...register("bio")} label="Bio" />

        <label className="block text-lg font-medium text-black mt-5">
          Gender
        </label>
        <div className="flex gap-4">
          <Radio
            {...register("gender")}
            value="male"
            label="Male"
            color="green"
          />
          <Radio
            {...register("gender")}
            value="female"
            label="Female"
            color="green"
          />
          <Radio
            {...register("gender")}
            value="notSpecified"
            label="Rather Not Say"
            color="green"
            defaultChecked
          />
        </div>

        <label className="block text-lg font-medium text-black mt-5">
          Address
        </label>
        <div className="mt-2">
          <Input {...register("addressCountry")} label="Address Country" />
        </div>
        <div className="mt-2">
          <Input {...register("addressCity")} label="Address City" />
        </div>
        <div className="mt-2">
          <Input {...register("addressArea")} label="Address Area" />
        </div>
        <div className="mt-2">
          <Input {...register("addressZip")} label="Address Zip" />
        </div>

        <label className="block text-lg font-medium text-black mt-5">
          Phone
        </label>
        <div className="mt-2">
          <Input {...register("phone")} label="Phone" />
        </div>

        <Button className="mt-4" loading={loading || userLoading}>
          Update Bio
        </Button>
      </form>
    </div>
  );
}

function extractDateFromISO(isoString: string | undefined | null) {
  return isoString?.split("T")[0] ?? "";
}

function ExperienceModal({
  addingNew = false,
  initialData,
  onEditComplete,
  children,
}: {
  addingNew?: boolean;
  initialData?: any;
  onEditComplete: (payload) => Promise<void>;
} & PropsWithChildren) {
  let [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const { register, watch, handleSubmit, setValue, reset } = useForm();
  const currentlyActive = watch("currentlyActive", false);

  let [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) {
      reset();
    }

    setValue("title", initialData?.["title"] ?? "");
    setValue("company", initialData?.["company"] ?? "");
    setValue("description", initialData?.["description"] ?? "");
    setValue("startDate", extractDateFromISO(initialData?.["startDate"]));
    setValue("endDate", extractDateFromISO(initialData?.["endDate"]));
    setValue("currentlyActive", initialData?.["currentlyActive"] ?? false);
  }, [open, initialData]);

  const onSubmit = (payload) => {
    onEditComplete(payload)
      .then(() => {
        toast.success("Experience saved");
        setOpen(false);
      })
      .catch(() => {
        toast.error("Failed to save experience");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div onClick={handleOpen}>{children}</div>

      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[48rem]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardBody className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <Typography variant="h4" color="blue-gray">
                  {addingNew ? "Add New " : "Edit "} Experience
                </Typography>
                <IconButton
                  color="blue-gray"
                  size="sm"
                  variant="text"
                  onClick={() => setOpen(false)}
                >
                  <IconX />
                </IconButton>
              </div>

              <Typography className="-mb-2" variant="h6">
                Title
              </Typography>
              <Input required {...register("title")} label="Title" size="lg" />

              <Typography className="-mb-2" variant="h6">
                Company
              </Typography>
              <Input
                required
                {...register("company")}
                label="Company"
                size="lg"
              />

              <Typography className="-mb-2" variant="h6">
                Description
              </Typography>
              <Textarea
                {...register("description")}
                required
                label="Description"
                size="lg"
              />

              <div className="flex gap-x-4">
                <div className="flex-1">
                  <Typography className="mb-2.5" variant="h6">
                    Start Date
                  </Typography>
                  <Input
                    {...register("startDate")}
                    required
                    type="date"
                    label="Start Date"
                    size="lg"
                  />
                </div>
                <div className="flex-1">
                  <Typography
                    className={clsx(
                      "mb-2.5",
                      currentlyActive && "text-gray-300"
                    )}
                    variant="h6"
                  >
                    End Date
                  </Typography>
                  <Input
                    className={clsx(currentlyActive && "opacity-30")}
                    {...register("endDate")}
                    type="date"
                    label="End Date"
                    size="lg"
                    disabled={currentlyActive}
                  />
                  <div className="mt-3 flex justify-end">
                    <Switch
                      {...register("currentlyActive")}
                      label="Currently Working"
                    />
                    ;
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button loading={loading} fullWidth>
                Save Experience
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}


function UpdateSkillsSection({
  user,
  userLoading,
  onUpdate,
}: {
  user: any;
  userLoading: boolean;
  onUpdate: () => void;
}) {
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    setSkills(user?.["skills"] || []);
  }, [user]);

  const [loading, setLoading] = useState(false);

  function updateInfo() {
    const payload = { skills };

    setLoading(true);
    apiRoutes
      .updateProfile(payload)
      .then(() => {
        toast.success("Updated");
        onUpdate();
      })
      .catch(() => {
        toast.error("Failed to update");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const { register, reset, handleSubmit } = useForm();

  function handleAddSkill(payload) {
    const { newSkill } = payload;
    if (!newSkill) return;

    setSkills(
      produce((draft) => {
        if (draft.indexOf(newSkill) !== -1) return;

        draft.push(newSkill);
      })
    );

    reset();
  }

  function removeSkill(index: number) {
    setSkills(
      produce((draft) => {
        draft.splice(index, 1);
      })
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Update Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Chip
            key={index}
            value={skill}
            color="green"
            onClose={() => removeSkill(index)}
          />
        ))}
      </div>

      <form
        onSubmit={handleSubmit(handleAddSkill)}
        className="mt-4 flex items-center gap-4"
      >
        <Input {...register("newSkill")} size="lg" label="New Skill" />
        <Button loading={loading || userLoading}>Add Skill</Button>
      </form>

      <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
        Update Experience
      </h2>

      {(user?.experiences || []).map((exp) => (
        <div key={exp["_id"]} className="mb-6">
          <h3 className="font-semibold">{exp.title}</h3>
          <p className="text-gray-600">{exp.company}</p>
          <p className="text-gray-500 text-sm">
            {renderExpDurationString(exp)}
          </p>
          <p className="text-gray-700">{exp.description}</p>
          <div className="flex gap-x-4 mt-2">
            <ExperienceModal
              addingNew={false}
              initialData={exp}
              onEditComplete={async (updatedExp) => {
                const prevExperiences = user?.experiences || [];

                const updatedExperiences = prevExperiences.map((prevExp) =>
                  prevExp["_id"] === exp["_id"] ? updatedExp : prevExp
                );

                const payload = {
                  experiences: updatedExperiences,
                };

                await apiRoutes.updateProfile(payload);
                onUpdate();
              }}
            >
              <Button>Edit</Button>
            </ExperienceModal>
            <Button
              onClick={() => {
                const prevExperiences = user?.experiences || [];

                const payload = {
                  experiences: prevExperiences.filter(
                    (prevExp) => prevExp["_id"] !== exp["_id"]
                  ),
                };

                setLoading(true);
                apiRoutes
                  .updateProfile(payload)
                  .then(() => {
                    toast.success("Updated");
                    onUpdate();
                  })
                  .catch(() => {
                    toast.error("Failed to update");
                  })
                  .finally(() => {
                    setLoading(false);
                  });
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}

      <ExperienceModal
        addingNew={true}
        onEditComplete={async (newExp) => {
          const experiences = user?.experiences || [];

          const payload = {
            experiences: [...experiences, newExp],
          };

          await apiRoutes.updateProfile(payload);
          onUpdate();
        }}
      >
        <Button variant="light" className="mt-4">
          Add New Experience
        </Button>
      </ExperienceModal>

      <hr className="mt-8" />
      <Button
        onClick={updateInfo}
        className="mt-4"
        loading={loading || userLoading}
      >
        Save
      </Button>
    </div>
  );
}

function UpdatePasswordSection() {
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handlePasswordSave = async () => {
    try {
      await apiRoutes.updatePassword({ oldPassword, newPassword });
      toast.success("Password successfully updated");
      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Update Password
      </h2>
      {isEditingPassword ? (
        <div className="space-y-4 w-1/2">
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Old Password
            </label>
            <input
              type={showOldPassword ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full border border-gray-300 text-gray-700 rounded-md p-2"
            />
            <span
              onClick={() => setShowOldPassword((prev) => !prev)}
              className="absolute right-3 top-[30px] z-[10] cursor-pointer"
            >
              {showOldPassword ? (
                <AiOutlineEyeInvisible size={24} color="#000" />
              ) : (
                <AiOutlineEye size={24} color="#AFB2BF" />
              )}
            </span>
          </div>
          <div className=" relative">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              value={newPassword}
              type={showNewPassword ? "text" : "password"}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 text-gray-700 rounded-md p-2"
            />
            <span
              onClick={() => setShowNewPassword((prev) => !prev)}
              className="absolute right-3 top-[30px] z-[10] cursor-pointer"
            >
              {showNewPassword ? (
                <AiOutlineEyeInvisible size={24} color="#AFB2BF" />
              ) : (
                <AiOutlineEye size={24} color="#AFB2BF" />
              )}
            </span>
          </div>

          <div className="flex space-x-4">
            <Button
              onClick={handlePasswordSave}
              className="px-4 py-2 mt-2 bg-primary text-white rounded-md hover:bg-primary/80"
            >
              Save Password
            </Button>
            <button
              onClick={() => {
                setIsEditingPassword(false);
                setOldPassword("");
                setNewPassword("");
              }}
              className="px-4 py-2 mt-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsEditingPassword(true)}
          className="px-4 py-2 mt-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Change Password
        </button>
      )}
    </div>
  );
}

function UpdateSections() {
  const { user, isLoading, refreshUser } = useCurrentUser();

  return (
    <>
      <UpdateNameSection
        user={user}
        userLoading={isLoading}
        onUpdate={refreshUser}
      />
      <UpdateBioSection
        user={user}
        userLoading={isLoading}
        onUpdate={refreshUser}
      />
      <UpdateSkillsSection
        user={user}
        userLoading={isLoading}
        onUpdate={refreshUser}
      />
      <UpdatePasswordSection />
    </>
  );
}

function ProfilePage() {
  return (
    <AppLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* ========== Static Header ========== */}
        <div className="app-container max-w-5xl w-full mb-12">
          <h1 className="text-4xl text-center">
            <span className="font-bold text-teal mr-1 relative bg-bdlue-600">
              Profile
              <TitleMark className="absolute w-32 top-full -left-5 dd -translate-y-2.5" />
            </span>
          </h1>

          <p className="text-center text-xl font-normal text-black/50 mt-6 max-w-2xl mx-auto">
            Edit your profile
          </p>
        </div>

        <UpdateSections />
      </div>
    </AppLayout>
  );
}

export default ProfilePage;
