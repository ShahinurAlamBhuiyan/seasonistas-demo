import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { useViewMode } from "~/app/providers/auth-state";
import { useLocale, useTranslations } from "next-intl";

function AppLink(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <Link
      {...props}
      href={`/${locale}${props.href}`} // Correct locale-based URL
      className={clsx(pathname === props.href && "text-teal")}
    />
  );
}

export function AllLinks() {
  const t = useTranslations("navigation"); // Use translations
  const viewMode = useViewMode();
  return (
    <>
      <AppLink href={`/home`}>{t("home")}</AppLink>
      <AppLink href={`/community`}>{t("community")}</AppLink>
      {viewMode === "employer" && (
        <>
          <AppLink href={`/create-job`}>{t("createJob")}</AppLink>
          <AppLink href={`/postings`}>{t("postings")}</AppLink>
        </>
      )}
      {/* <AppLink href={`/information`}>{t("information")}</AppLink> */}
      {/* <AppLink href={`/services`}>{t("services")}</AppLink> */}
      <AppLink href={`/about`}>{t("aboutUs")}</AppLink>
      <AppLink href={`/dashboard`}>Dashboard</AppLink>
    </>
  );
}
