"use client"; // Required for hooks in App Router
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import React from "react";
import { Button, Typography, IconButton } from "@material-tailwind/react";
import { atom, useAtom } from "jotai";
import { Select } from "~/components/Select/Select";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export const languageDrawerAtom = atom(false);

export function LanguageDrawer() {
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname(); // Get current route
  const [isOpen, setIsOpen] = useAtom(languageDrawerAtom);
  const close = () => setIsOpen(false);

  const changeLanguage = (lng: string) => {
    const newPath = `/${lng}${pathname.replace(/^\/[a-z]{2}/, "")}`;
    localStorage.setItem("locale", lng);
    router.push(newPath);
    close();
  };

  return (
    <Drawer
      open={isOpen}
      onClose={close}
      direction="left"
      overlayOpacity={0.6}
      duration={200}
      lockBackgroundScroll
      className="!w-[85vw] ph:!w-[300px] p-4"
    >
      <div className="flex items-center justify-between px-4 pb-2">
        <Typography variant="h5" color="blue-gray">
          {t("changeLanguage")}
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <div className="flex flex-col gap-6 p-4">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          {t("selectYourLanguage")}
        </Typography>
        <Select
          value={
            typeof localStorage !== "undefined"
              ? localStorage.getItem("locale") || "en"
              : "en"
          }
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">{t("english")}</option>
          <option value="el">{t("greek")}</option>
        </Select>

        <Button onClick={close}>{t("confirm")}</Button>
      </div>
    </Drawer>
  );
}
