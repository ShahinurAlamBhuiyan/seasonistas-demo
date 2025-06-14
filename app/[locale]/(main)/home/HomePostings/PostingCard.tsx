import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Button } from "~/components/Button/Button";
import { UserOwnedCard } from "~/components/UserOwnedCard";
import { apiRoutes } from "~/app/api-routes";
import { useResumableAction } from "~/app/hooks/useResumableAction";
import { reportedCall } from "~/app/utils/promises";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { AskApplicationQuestionsModal } from "./AskApplicationQuestionsModal";
import { ApplicationDetailModel } from "./ApplicationDetailModel";
import { PostingDetailModal } from "./PostingDetailModal";

export function PostingCard({
  posting,
  isBestMatch,
  isFavourite = false,
  setIsFavourite,
  shouldBeVisible,
}: {
  posting: any;
  isBestMatch?: boolean;
  isFavourite?: boolean;
  setIsFavourite?: (fav: boolean) => void;
  shouldBeVisible?: (applied: boolean) => boolean;
}) {
  const postingId = posting["_id"];
  const t = useTranslations("home");
  const [msgUrl, setMsgUrl] = useState("");

  useEffect(() => {
    const locale = localStorage.getItem("locale") || "en";
    setMsgUrl(`/${locale}/chat/${posting?.poster["_id"]}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    isDone: isApplied,
    isExecuting: isApplying,
    isLoading,
    execute: apply,
  } = useResumableAction({
    executeFn: async (isApplied, answers: string[]) => {
      if (!isApplied) {
        const questions = posting?.questions || [];
        await reportedCall(
          apiRoutes.applyToJob({
            postingId: postingId,
            answers: questions.map((question, index) => ({
              question,
              answer: answers[index],
            })),
          })
        );
      }

      return true;
    },
    hydrateFn: async () => {
      const { applied } = await apiRoutes.isPostingApplied(postingId);
      return applied;
    },
    hydrateDeps: [postingId],
  });

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isLoading || isApplying) return;

    setIsVisible(shouldBeVisible?.(isApplied) ?? true);
  }, [shouldBeVisible, isApplied, isApplying, isLoading]);

  if (!isVisible) return null;

  return (
    <UserOwnedCard
      user={posting?.poster}
      title={
        <>
          <PostingDetailModal posting={posting}>
            <span className="hover:underline hover:text-teal cursor-pointer">
              {posting?.title}
            </span>
          </PostingDetailModal>
        </>
      }
      companyCountry={posting?.companyCountry}
      startTime={posting?.startTime}
      endTime={posting?.endTime}
      subtitle={posting?.description}
      tag={isBestMatch && t("bestMatch")}
      withFavouriteToggle
      isFavourite={isFavourite}
      setIsFavourite={setIsFavourite}
      actions={
        <>
          <AskApplicationQuestionsModal
            posting={posting}
            onComplete={async (answers) => {
              apply(answers);
            }}
          >
            <Button
              fullRounded
              loading={isApplying}
              disabled={isLoading || isApplied}
            >
              {isApplied === true ? t("alreadyApplied") : t("apply")}
            </Button>
          </AskApplicationQuestionsModal>
          <Link href={msgUrl}>
            <Button fullRounded variant="outlined">
              {t("message")}
            </Button>
          </Link>
          {isApplied && (
            <ApplicationDetailModel posting={posting}>
              <Button fullRounded variant="text" className="text-teal ml-auto">
                View Application
              </Button>
            </ApplicationDetailModel>
          )}
        </>
      }
    />
  );
}
