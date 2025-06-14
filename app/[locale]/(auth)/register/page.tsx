"use client";

import Image from "next/image";

import Link from "next/link";
import toast from "react-hot-toast";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, UseFormRegister } from "react-hook-form";

import HeroImg from "~/app/assets/auth-hero.jpg";
import GoogleIcon from "~/app/assets/google.svg";

import { Button } from "~/components/Button/Button";
import { apiRoutes } from "~/app/api-routes";
import { useAuthState } from "~/app/providers/auth-state";

import { AuthInput, Note, PasswordInput } from "../common";

function CandidateForm({ register }: { register: UseFormRegister<any> }) {
  return (
    <>
      {/* prettier-ignore */}
      <div className="space-y-4">
        <AuthInput {...register("fullName")} label="Your Name" />
        <AuthInput {...register("dateOfBirth")} label="Date Of Birth" type="date" />

        <AuthInput {...register("email")} label="Email" />
        <PasswordInput {...register("password")} label="Password" />
        <PasswordInput {...register("confirmPassword")} label="Confirm Password" />
      </div>
    </>
  );
}

function EmployerForm({ register }: { register: UseFormRegister<any> }) {
  return (
    <>
      {/* prettier-ignore */}
      <div className="space-y-4">
        <AuthInput {...register("fullName")} label="Company Name" />
        <AuthInput {...register("companyPhone")} label="Company Phone Number" />
        <AuthInput {...register("companyPersonName")} label="Company Person Name" />
        <AuthInput {...register("companyIndustry")} label="Company Industry" />
        <AuthInput {...register("companyArea")} label="Company Address" />

        <AuthInput {...register("email")} label="Email" />
        <PasswordInput {...register("password")} label="Password" />
        <PasswordInput {...register("confirmPassword")} label="Confirm Password" />
      </div>
    </>
  );
}

function RegisterFormContent() {
  const router = useRouter();

  type NewUserRole = "employee" | "employer";
  const [role, setRole] = useState<NewUserRole>("employee");
  const getButtonVariant = (mode: NewUserRole) =>
    mode === role ? "filled" : "outlined";

  const [loading, setLoading] = useState(false);
  const [ loginUrl, setLoginUrl ] = useState("");
  const { register, handleSubmit, reset } = useForm<any>();

  const authState = useAuthState();
  const { isLoggedIn } = authState;

  useLayoutEffect(() => {
    const locale = localStorage.getItem("locale") || "en";
    if (isLoggedIn) {
      router.push(`/${locale}/home`);
    }
  }, [router, isLoggedIn]);

  function handleRegister(values: any) {
    let { fullName, email, password, confirmPassword } = values;

    fullName = String(fullName).trim();
    email = String(email).trim();
    password = String(password).trim();

    if (!fullName || !email || !password) {
      toast.error("Fill all the fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const payload = {
      ...values,
      role,
    };

    delete payload["confirmPassword"];

    if (!payload["dateOfBirth"]) {
      delete payload["dateOfBirth"];
    }

    setLoading(true);
    apiRoutes
      .register(payload)
      .then(({ token, user }) => {
        console.log("Registered");
        authState.login(token, user);
      })
      .catch((err) => {
        toast.error(err.errorMessage);
        setLoading(false);
      });
  }

  useEffect(() => {
    const locale = localStorage.getItem("locale") || "en";
    setLoginUrl(`/${locale}/login`);
    reset();
  }, [reset, role]);

  return (
    <>
      <h1 className="text-4xl font-semibold text-center md:text-left">
        Sign up
      </h1>
      <p className="text-black/60 font-medium text-lg mt-3.5 text-center md:text-left">
        Sign up to enjoy the feature of Seasonistas
      </p>

      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="flex max-md:mx-auto gap-x-4 max-w-[22rem] md:max-w-[30rem] mt-5 mb-8">
          <Button
            type="button"
            className="flex-1"
            variant={getButtonVariant("employee")}
            onClick={() => setRole("employee")}
          >
            Candidate
          </Button>
          <Button
            type="button"
            className="flex-1"
            variant={getButtonVariant("employer")}
            onClick={() => setRole("employer")}
          >
            Employer
          </Button>
        </div>

        {role === "employee" ? (
          <CandidateForm register={register} />
        ) : (
          <EmployerForm register={register} />
        )}

        <Button type="submit" fullWidth className="mt-6" loading={loading}>
          Sign Up
        </Button>

        {/* <div className="flex items-center gap-x-2 my-4">
          <div className="h-0.5 w-full bg-gray-line" />
          <p className="font-medium text-gray-prose">or</p>
          <div className="h-0.5 w-full bg-gray-line" />
        </div>

        <Button
          type="button"
          fullWidth
          variant="light"
          className="gap-x-2 mb-4"
        >
          Continue with Google
          <GoogleIcon className="w-[18px]" />
        </Button> */}

        <Note
          label="Already have an account?"
          linkLabel="Login"
          linkHref={loginUrl}
        />
      </form>
    </>
  );
}

export default function Register() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 md:min-w-[30rem]">
        <div className="px-8 md:px-12 lg:px-20 xl:px-28 pt-12 md:pt-28 pb-14">
          <RegisterFormContent />
        </div>
      </div>
      <div className="max-w-[60%] hidden md:block p-3">
        <Image
          alt=""
          src={HeroImg}
          className="h-full rounded-3xl object-cover object-[center_top]"
        />
      </div>
    </div>
  );
}
