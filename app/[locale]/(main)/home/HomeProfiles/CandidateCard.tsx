import { useEffect, useState } from "react";
import { apiRoutes } from "~/app/api-routes";

import { UserOwnedCard } from "~/components/UserOwnedCard";
import { Button } from "~/components/Button/Button";
import { useResumableAction } from "~/app/hooks/useResumableAction";
import { reportedCall } from "~/app/utils/promises";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export function CandidateCard({ employee }: { employee: any }) {
  const employeeId = employee["_id"];
  const t = useTranslations('home');
  const [ msgUrl, setMsgUrl ] = useState("");
  useEffect(() => {
    const locale = localStorage.getItem("locale") || "en";
    setMsgUrl(`/${locale}/chat/${employee["_id"]}`);
  }, []);

  const {
    isDone: isInvited,
    isExecuting: isInviting,
    isLoading,
    execute: invite,
  } = useResumableAction({
    executeFn: async (isInvited) => {
      if (!isInvited) {
        await reportedCall(apiRoutes.inviteEmployee({ employeeId }));
      }

      return true;
    },
    hydrateFn: async () => {
      const { invited } = await apiRoutes.isEmployeeInvited({ employeeId });
      return invited;
    },
    hydrateDeps: [employeeId],
  });

  return (
    <UserOwnedCard
      key={employee["_id"]}
      user={employee}
      actions={
        <>
          <Button
            fullRounded
            onClick={invite}
            loading={isInviting}
            disabled={isLoading || isInvited}
          >
            {isInvited === true ? t('alreadyInvited') : t('invite')}
          </Button>
          <Link href={msgUrl}>
            <Button fullRounded variant="outlined">
            {t('message')}
            </Button>
          </Link>
        </>
      }
    />
  );
}
