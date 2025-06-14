"use client";

import { Spinner } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ClientRoot() {
  const t  = useTranslations("indexPage");
  const router = useRouter()

  useEffect(() => {
    const locale = localStorage.getItem("locale") || "en";
    router.push(`/${locale}/home` );
  }, [router]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Spinner color="blue-gray" width={80} height={80} />
      <p className="mt-4">{t("loading")}</p>
    </div>
  );
}
