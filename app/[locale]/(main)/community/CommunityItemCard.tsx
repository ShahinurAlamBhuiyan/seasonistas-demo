"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiRoutes } from "~/app/api-routes";
import { useResumableAction } from "~/app/hooks/useResumableAction";
import { delay, reportedCall, sleep } from "~/app/utils/promises";
import { Button } from "~/components/Button/Button";
import { UserOwnedCard } from "~/components/UserOwnedCard";
import { useTranslations } from 'next-intl';

export function CommunityItemCard({ user }: { user: any }) {
  const userId = user["_id"];
  const t = useTranslations('community');
  const [ msgUrl, setMsgUrl ] = useState("");

  useEffect(() => {
    const locale = localStorage.getItem("locale") || "en";
    setMsgUrl(`/${locale}/chat/${user["_id"]}`);
  }, []);
  // Friendship
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
    <UserOwnedCard
      layout="centered"
      user={user}
      subtitle={t('chefSubtitle')}
      tag={isFriend === true && "Friend"}
      actions={
        <>
          <Button
            className="!py-1 flex-1"
            fullRounded
            onClick={changeFriendship}
            loading={isAdding}
            disabled={isHydrating}
          >
            {isFriend ? t('remove') : t('add')}
          </Button>
          <Link href={msgUrl}>
            <Button variant="outlined" fullRounded className="!py-1 flex-1">
            {t('message')}
            </Button>
          </Link>
        </>
      }
    />
  );
}
