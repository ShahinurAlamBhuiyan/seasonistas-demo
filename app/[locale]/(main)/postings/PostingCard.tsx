import { Button } from "@material-tailwind/react";
import {
  IconLayoutDashboard,
  IconListDetails,
  IconScanPosition,
} from "@tabler/icons-react";
import { atom, useAtom } from "jotai";
import { useCallback, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useTranslations } from 'next-intl';

import { ApplicantsList } from "./ApplicantsList";
import { ApplicantsGrid } from "./ApplicantsGrid";
import { apiRoutes } from "~/app/api-routes";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const displayAtom = atom<"list" | "grid">("list");

export function PostingCard({ posting }: { posting: any }) {
  const t = useTranslations('postings');
  const [updatingStatus, setUpdatingStatus] = useState(false);

  const [display, setDisplay] = useAtom(displayAtom);
  const queryClient = useQueryClient();

  const toggle = useCallback(
    () => setDisplay((x) => (x === "grid" ? "list" : "grid")),
    []
  );

  const DisplayIcon =
    display === "list" ? IconListDetails : IconLayoutDashboard;

  async function updateStatus(isActive: boolean) {
    setUpdatingStatus(true);
    try {
      const responsePromise = apiRoutes.updateJobStatus(
        { isActive },
        posting._id
      );

      let result = await toast.promise(responsePromise, {
        loading: t('updatingStatus'),
        success: t('markedSuccessfully', { status: isActive ? t('active') : t('inactive') }),
        error: t('errorOccurred'),
      });
      console.log(result);
      queryClient.invalidateQueries({ queryKey: ["getMyPostings"] });
    } finally {
      setUpdatingStatus(false);
    }
  }

  let isActive = posting["isActive"] || false;
  const applications = posting["applications"] || [];

  return (
    <div
      className={clsx(
        "rounded-xl px-5 py-5",
        isActive ? "border-x-purple border-2" : "border border-gray-line-2/80"
      )}
    >
      <div className="flex items-center justify-between gap-x-3">
        <span
          className={clsx(
            "text-white font-bold px-2 py-1.5 text-fine rounded-md",
            isActive ? "bg-x-purple" : "bg-red-500"
          )}
        >
          {isActive ? t('active') : t('inactive')}
        </span>
        <Link href="create-job">
          <Button
            size="lg"
            color="purple"
            variant="text"
            className="flex items-center gap-2 !px-4 !py-2"
          >
            {t('repost')}
            <IconScanPosition size={20} />
          </Button>
        </Link>
      </div>
      <h3 className="font-semibold text-lg mt-3">{posting.title}</h3>
      <p className="text-black/70 mt-1">{posting.description}</p>

      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mt-4 mb-2">
          {t('applicants', { count: applications.length })}
        </h2>
        <Button
          size="sm"
          color="blue"
          variant="text"
          className="flex items-center gap-2"
          onClick={toggle}
        >
          <DisplayIcon size={20} />
          {t('display')}: {display}
        </Button>
      </div>

      {display === "list" ? (
        <ApplicantsList applications={applications} />
      ) : (
        <ApplicantsGrid applications={applications} />
      )}

      <div className="flex items-center gap-x-4 pt-4 mt-2 border-t border-gray-line-2">
        <Button
          size="sm"
          color={isActive ? "red" : "green"}
          variant="filled"
          className="text-[0.9375rem]"
          disabled={updatingStatus}
          onClick={() => {
            updateStatus(!isActive);
          }}
        >
          <span className="!capitalize">
            {t('make')} {isActive ? t('inactive') : t('active')}
          </span>
        </Button>
      </div>
    </div>
  );
}