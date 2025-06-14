import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import { Avatar, Badge, IconButton } from "@material-tailwind/react";
import { IconHeartFilled } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

const formatDateTime = (date: string) => {
  return new Date(date).toLocaleString();
};

export function UserOwnedCard({
  user,
  title,
  subtitle,
  tag,
  withFavouriteToggle = false,
  isFavourite = false,
  setIsFavourite = () => {},
  actions,
  companyCountry,
  startTime,
  endTime,
  layout = "default",
}: {
  user?: any;
  title?: ReactNode;
  subtitle?: ReactNode;
  tag?: ReactNode;
  withFavouriteToggle?: boolean;
  isFavourite?: boolean;
  setIsFavourite?: (fav: boolean) => void;
  actions?: ReactNode;
  companyCountry?: ReactNode;
  startTime?: string;
  endTime?: string;
  layout?: "default" | "centered";
}) {
  let isCentered = layout === "centered";
  const t = useTranslations("home");
  return (
    <div
      className={clsx(
        "border-gray-line-2/50 border rounded-xl px-5 py-5",
        "flex flex-col",
        isCentered && "items-center"
      )}
    >
      <header
        className={clsx(
          "flex items-start self-stretch relative",
          isCentered && "justify-center"
        )}
      >
        <Badge
          placement="top-start"
          overlap="circular"
          color="blue-gray"
          withBorder
          className="shrink-0"
          // NOTE: remove this to show online status
          invisible
        >
          <Avatar
            size="lg"
            className="object-center"
            src="/profile_empty_gradient.png"
            alt="avatar"
          />
        </Badge>

        {tag && (
          <div
            className={clsx(
              "bg-x-ctrl-purple text-white font-bold px-2 py-1.5 text-fine ml-3 rounded-md",
              isCentered && "absolute left-0 top-0"
            )}
          >
            {tag}
          </div>
        )}
        {/*
        {withFavouriteToggle && ( */}
        <div className="absolute right-0 top-0">
          <IconButton
            variant="text"
            onClick={() => setIsFavourite?.(!isFavourite)}
          >
            <IconHeartFilled
              className={clsx(
                isFavourite ? "text-x-ctrl-purple" : "text-gray-600/30"
              )}
            />
          </IconButton>
        </div>
        {/* )} */}
      </header>

      <Link
        href={`user/${user?.id}`}
        className="text-teal hover:underline font-semibold mt-1"
      >
        {user?.fullName ?? "[n/a]"}
      </Link>

      {title && (
        <h3
          className={clsx(
            "font-semibold text-lg mt-3",
            isCentered && "text-center"
          )}
        >
          {title}
        </h3>
      )}

      {subtitle && (
        <p className={clsx("text-black/70 mt-1", isCentered && "text-center")}>
          {subtitle}
        </p>
      )}

      {companyCountry && (
        <p className={clsx("text-black/50 mt-1", isCentered && "text-center")}>
          {companyCountry}
        </p>
      )}

      {(startTime || endTime) && (
        <div
          className={clsx("text-black/50 mt-1", isCentered && "text-center")}
        >
          <p className="flex items-center gap-2">
            {startTime && (
              <span>
                <b>{t("start_time")}:</b> {formatDateTime(startTime)}
              </span>
            )}
            {startTime && endTime && <span className="text-black/30">•</span>}
          </p>
          <p className="flex items-center gap-2">
            {endTime && (
              <span>
                <b>{t("end_time")}:</b> {formatDateTime(endTime)}
              </span>
            )}
          </p>
        </div>
      )}

      {actions && (
        <div className="mt-4 flex items-center gap-x-2 mb-4">{actions}</div>
      )}
    </div>
  );
}
