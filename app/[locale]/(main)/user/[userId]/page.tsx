"use client";

import {
  Card,
  CardBody,
  Avatar,
  Tabs,
  Tab,
  TabsHeader,
  TabsBody,
  TabPanel,
  Chip,
  Spinner,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Link from "next/link";
import {
  IconMail,
  IconMap2,
  IconPhoneCall,
  IconBriefcase,
} from "@tabler/icons-react";

import { Button } from "~/components/Button/Button";
import { repeatNode } from "~/app/utils/markup";
import { AppLayout } from "~/components/AppLayout/AppLayout";
import { useParams } from "next/navigation";
import { useLayoutEffect, useState, useEffect } from "react";
import { apiRoutes } from "~/app/api-routes";
import { useQuery } from "@tanstack/react-query";
import { useResumableAction } from "~/app/hooks/useResumableAction";
import { reportedCall } from "~/app/utils/promises";
import { useTranslations } from "next-intl";
import { renderExpDurationString } from "~/app/utils/misc";

export default function UserProfile() {
  const { userId } = useParams<{ userId: string }>();

  // TODO: replace with useCurrentUser(userId);
  const [status, setStatus] = useState<"ok" | "loading" | "error">("loading");
  const [user, setUser] = useState<any>(null);

  useLayoutEffect(() => {
    async function loadUser() {
      try {
        const user = await apiRoutes.getUser(userId);
        setUser(user);
        setStatus("ok");
      } catch {
        setStatus("error");
      }
    }

    setStatus("loading");
    setUser(null);
    loadUser();
  }, [userId]);

  return (
    <>
      <>{status === "ok" && user && <Contents user={user} />}</>
    </>
  );
}

function StatusButton({ className }: { className?: string }) {
  const t = useTranslations("user");
  const [status, setStatus] = useState<"looking" | "notLooking" | null>(null);

  const handleStatusChange = async (newStatus: "looking" | "notLooking") => {
    setStatus(newStatus);
    // TODO: Add API call to update user status
  };

  return (
    <Menu>
      <MenuHandler>
        <Button
          fullRounded
          className={className}
          color={
            status === "looking"
              ? "green"
              : status === "notLooking"
              ? "gray"
              : "blue"
          }
        >
          <div className="flex items-center gap-2">
            <IconBriefcase className="w-4 h-4" />
            {status === "looking"
              ? t("lookingForJob")
              : status === "notLooking"
              ? t("notLookingForJob")
              : t("setStatus")}
          </div>
        </Button>
      </MenuHandler>
      <MenuList className="min-w-[180px]">
        <MenuItem
          onClick={() => handleStatusChange("looking")}
          className="gap-2 text-green-500"
        >
          {t("lookingForJob")}
        </MenuItem>
        <MenuItem
          onClick={() => handleStatusChange("notLooking")}
          className="gap-2 text-gray-500"
        >
          {t("notLookingForJob")}
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function ConnectButton({ user, className }: any) {
  const userId = user["_id"];

  const {
    isDone: isFriend,
    isExecuting: isAdding,
    isHydrating,
    execute: changeFriendship,
  } = useResumableAction({
    executeFn: async (isFriend) => {
      let apiCall: Promise<unknown>;
      let result: boolean;

      if (isFriend) {
        apiCall = apiRoutes.removeFriend({ userId });
        result = false;
      } else {
        apiCall = apiRoutes.addFriend({ userId });
        result = true;
      }

      await reportedCall(apiCall);
      return result;
    },

    hydrateFn: async () => {
      const { isFriend } = await apiRoutes.isFriend({ userId });
      return isFriend;
    },

    hydrateDeps: [userId],
  });

  return (
    <Button
      fullRounded
      onClick={changeFriendship}
      loading={isAdding}
      disabled={isHydrating}
      className={className}
    >
      {isFriend ? "Remove" : "Connect"}
    </Button>
  );
}

function Contents({ user }: any) {
  const connectionCount = user["friendsWith"].length + user["friendsOf"].length;
  const t = useTranslations("community");
  const [msgUrl, setMsgUrl] = useState("");
  useEffect(() => {
    const locale = localStorage.getItem("locale") || "en";
    setMsgUrl(`/${locale}/chat/${user["_id"]}`);
  }, []);
  return (
    <AppLayout>
      <div className="app-container max-w-6xl w-full mt-8 grid grid-cols-3 gap-6">
        {/* Left Sidebar (Main Profile Section) */}
        <div className="col-span-2">
          {/* Profile Header */}
          <Card className="shadow-md rounded-lg mb-8">
            <div className="relative">
              {/* Cover Image */}
              {/* <div className="h-40 bg-gray-300"></div> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/cover-1.jpg"
                alt="Cover Image"
                className="h-44 w-full object-cover"
              />

              {/* Profile Picture */}
              <div className="absolute -bottom-16 left-6">
                <Avatar
                  src="/profile_empty_gradient.png"
                  alt="Profile Picture"
                  className="w-32 h-32 border-4 border-white"
                />
              </div>
            </div>

            {/* User Info */}
            <CardBody className="pt-16">
              <h1 className="text-2xl font-semibold">{user?.fullName}</h1>
              {/* <p className="text-gray-600">Software Developer at XYZ Corp</p> */}
              <p className="text-gray-600">
                {/* prettier-ignore */}
                {[
                  user?.addressArea,
                  user?.addressCity,
                  user?.addressCountry,
                ].filter(Boolean).join(", ")}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {connectionCount} connection(s)
              </p>

              {/* Buttons */}
              <div className="mt-4 flex space-x-4">
                <StatusButton />
                {/* <ConnectButton user={user} /> */}
                <Link href={msgUrl}>
                  <Button variant="outlined" fullRounded className="">
                    {t("message")}
                  </Button>
                </Link>
                <Button fullRounded variant="outlined">
                  Share
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Tabs Section */}
          <Card className="shadow-md rounded-lg mb-8">
            <Tabs value="profile">
              <TabsHeader className="border-b border-gray-200">
                <Tab value="profile">Profile</Tab>
                <Tab value="about">About</Tab>
                <Tab value="experience">Experience</Tab>
                <Tab value="skills">Skills</Tab>
              </TabsHeader>

              {/* Profile Details */}
              <TabsBody className="[&_*]:text-black">
                <TabPanel value="profile">
                  <div className="divide-y-2">
                    <p className="text-gray-700 py-4">
                      <p className="font-bold text-xl text-purple-400 flex gap-x-2 items-center mb-3">
                        <IconMail size={28} />
                        <span>Email address:</span>
                      </p>
                      <a
                        href={`mailto:${user.email}`}
                        className="text-blue-500 hover:underline cursor-pointer"
                      >
                        {user.email}
                      </a>
                    </p>
                    {/* <p className="text-gray-700 py-4">
                    <p className="font-bold text-xl text-blue-400 flex gap-x-2 items-center mb-3">
                      <IconMap2 size={28} />
                      <span>Home address:</span>
                    </p>
                    <p>
                      92 Miles Drive, Newark, NJ 07103, California, United
                      States of America
                    </p>
                  </p> */}
                    <p className="text-gray-700 py-4">
                      <p className="font-bold text-xl text-pink-400 flex gap-x-2 items-center mb-3">
                        <IconPhoneCall size={28} />
                        <span>Phone number:</span>
                      </p>
                      <a
                        href="#"
                        className="text-blue-500 hover:underline cursor-pointer"
                      >
                        {user?.phone}
                      </a>
                    </p>
                  </div>
                </TabPanel>
                <TabPanel value="about">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">About</h2>
                    <p className="text-red-700">{user?.bio}</p>
                  </div>
                </TabPanel>
                <TabPanel value="experience">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Experience</h2>
                    {(user?.experiences || []).map((exp) => (
                      <div key={exp["_id"]} className="mb-6">
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                        <p className="text-gray-500 text-sm">
                          {renderExpDurationString(exp)}
                        </p>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel value="skills">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {(user?.skills || []).map((skill, index) => (
                        <Chip key={index} value={skill} color="green" />
                      ))}
                    </div>
                  </div>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-1 space-y-8">
          {/* People You May Know Section */}
          <Card className="shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">People you may know</h2>
            <div className="divide-y-2">
              <PeopleYouMayKnowList currentUser={user} />
            </div>
          </Card>

          {/* Advertisement Section */}
          <Card className="shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Advertisement</h2>
            <div className="bg-gray-300 h-40 mb-4"></div>
            <p className="text-gray-600 text-sm">
              Ad content here. Promote your business or get more visibility
              through LinkedIn ads.
            </p>
          </Card>

          <div className="h-24" />
        </div>
      </div>
    </AppLayout>
  );
}

function PeopleYouMayKnowList({ currentUser }) {
  let { isLoading, data: users } = useQuery<any>({
    queryKey: ["getCommunityPYMK"],
    queryFn: () => apiRoutes.getCommunity({ pagelen: 100000 }),
  });

  if (isLoading) {
    return <Spinner color="blue-gray" width={32} height={32} />;
  }

  users = users.data as any[];

  return (
    <>
      {users
        .filter((user) => user["_id"] !== currentUser["_id"])
        .map((user) => (
          <UserYouMayKnow key={user["_id"]} user={user} />
        ))}
    </>
  );
}

function UserYouMayKnow({ user }: any) {
  return (
    <div className="flex items-center space-x-4 py-3">
      <Avatar
        src="/profile_empty_gradient.png"
        alt={user.fullName}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <p className="font-semibold">{user.fullName}</p>
        <p className="text-gray-600 text-sm">UI/UX Designer</p>
        <ConnectButton user={user} className="mt-2 !py-1 !px-1" />
      </div>
    </div>
  );
}
