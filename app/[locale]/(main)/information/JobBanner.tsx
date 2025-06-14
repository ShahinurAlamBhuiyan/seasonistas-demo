import { useEffect, useState } from "react";
import { Button } from "~/components/Button/Button";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export function JobBanner() {
  const t = useTranslations('information');
  const [ msgPostAJobUrl, setPostAJobUrl ] = useState("");
  const [ msgApplyForAJobUrl, setMsgApplyForAJobUrl ] = useState("");
  useEffect(() => {
    const locale = localStorage.getItem("locale") || "en";
    // setMsgUrl(`/${locale}/job-user`);
    setPostAJobUrl(`/${locale}/create-job`);
    setMsgApplyForAJobUrl(`/${locale}/postings`);
  }, []);
  return (
    <section className="bg-teal/80 py-20 text-center text-white">
      <div className="app-container">
        <h1 className="text-3xl font-extrabold">{t('yourDreamJobs')}</h1>
        <p className="font-semibold mt-2">
          {t('overMillionInteractions')}
        </p>

        <div className="flex max-ph:flex-col justify-center mt-5 gap-2">
          <Link href={msgPostAJobUrl}>
            <Button fullRounded theme="white">
              {t('searchDocument')}
            </Button>
          </Link>
          <Link href={msgApplyForAJobUrl}>
            <Button fullRounded theme="white" variant="outlined">
              {t('applyJobNow')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}