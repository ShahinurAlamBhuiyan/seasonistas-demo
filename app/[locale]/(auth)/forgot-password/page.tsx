"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

import HeroImg from "~/app/assets/auth-hero.jpg";
import { apiRoutes } from "~/app/api-routes";
import { Button } from "~/components/Button/Button";
import { useTranslations } from "next-intl";
import { AuthInput, Note } from "../common";

function ForgotPasswordContent() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<any>();
  const t = useTranslations("auth");
  const locale = localStorage.getItem("locale") || "en";

  async function handleForgotPassword(payload: any) {
    setLoading(true);
    try {
      await apiRoutes.forgotPassword(payload);
      toast.success(t("resetLinkSent"));
    } catch (error) {
      toast.error(t("failedToSendLink"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleForgotPassword)}>
      <h1 className="text-4xl font-semibold text-center md:text-left">
        {t("forgotPassword")}
      </h1>
      <p className="text-black/60 font-medium text-lg mt-3.5 text-center md:text-left">
        {t("forgotPasswordDescription")}
      </p>

      <div className="space-y-4 mt-5">
        <AuthInput
          {...register("email")}
          label={t("email")}
          type="email"
          required
        />
      </div>

      <Button type="submit" fullWidth className="mt-6" loading={loading}>
        {t("sendResetLink")}
      </Button>

      <Note
        label={t("rememberedPassword")}
        linkLabel={t("login")}
        linkHref={`/${locale}/login`}
      />
    </form>
  );
}

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 md:min-w-[30rem]">
        <div className="px-8 md:px-12 lg:px-20 xl:px-28 pt-12 md:pt-28 pb-14">
          <ForgotPasswordContent />
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
