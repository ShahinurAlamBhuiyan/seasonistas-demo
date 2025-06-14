"use client";

import clsx from "clsx";
import { AppLayout } from "~/components/AppLayout/AppLayout";

import ResumeIcon from "~/app/assets/icon-resumes.svg";

import React, { PropsWithChildren } from "react";
import { TitleMark } from "~/components/decorations";
import { FrequentlyAskedQuestions } from "~/components/FrequentlyAskedQuestions";
import { JobBanner } from "./JobBanner";
import { IconCoinFilled, IconCoins, IconUserSearch } from "@tabler/icons-react";
import { InfoStepper } from "./InfoStepper";
import { useViewMode } from "~/app/providers/auth-state";
import { useTranslations } from 'next-intl';


function FeatureBlock({
  Icon,
  title,
  children,
}: { Icon: any; title: string } & PropsWithChildren) {
  return (
    <div className="flex flex-col items-center md:max-w-sm flex-1">
      <div
        className={clsx(
          "bg-black text-white w-16 h-16 flex items-center justify-center",
          "rounded-full"
        )}
      >
        {Icon && <Icon size={40} className="w-7 scale-110" />}
      </div>

      <div
        style={{
          boxShadow: "0px 12px 15px 0px #09291E1A",
        }}
        className={clsx(
          "self-stretch text-center space-y-2 py-8 px-7 mt-5 flex-1",
          "border-[#E6E9F0] border rounded-lg"
        )}
      >
        {/* <h2 className='text-xl font-semibold'>Free Resume Assessments</h2> */}
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="font-normal text-black/50">
          {children ??
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique mauris rhoncus odio aliquet, vitae."}
        </p>
      </div>
    </div>
  );
}

function InformationPageContent() {
  const viewMode = useViewMode();
  const t = useTranslations('information');

  return (
    <div className="pb-40 pt-8">
      <div className="app-container max-w-5xl w-full mb-12">
        {/* Title */}
        <h1 className="text-4xl text-center">
          <span className="font-bold text-teal mr-1 relative bg-bdlue-600">
            {t('information')}
            <TitleMark className="absolute w-32 top-full -left-5 dd -translate-y-2.5" />
          </span>
          {/* <span className="font-normal"> we are</span> */}
        </h1>

        {/* Subtitle */}
        <p className="text-center text-xl font-normal text-black/50 mt-6 max-w-2xl mx-auto">
          {t('informationDescription')}
        </p>
      </div>
      <div className="app-container max-w-5xl w-full pt-8">
        <InfoStepper />
      </div>
      <JobBanner />

      <div className="app-container max-w-5xl w-full pt-8">
        <h1 className="text-4xl text-center mt-14 mb-8">
          <span className="font-bold text-teal mr-1 relative bg-bdlue-600">
            {t('frequently')}
            <TitleMark className="absolute w-32 top-full -left-5 dd -translate-y-2.5" />
          </span>
          <span className="font-normal"> {t('askedQuestions')}</span>
        </h1>
        <FrequentlyAskedQuestions
          faqs={[
            {
              q: t('faq1Question'),
              a: t('faq1Answer'),
            },
            {
              q: t('faq2Question'),
              a: t('faq2Answer'),
            },
            {
              q: t('faq3Question'),
              a: t('faq3Answer'),
            },
            {
              q: t('faq4Question'),
              a: t('faq4Answer'),
            },
            {
              q: t('faq5Question'),
              a: t('faq5Answer'),
            },
            {
              q: t('faq6Question'),
              a: t('faq6Answer'),
            },
            {
              q: t('faq7Question'),
              a: t('faq7Answer'),
            },
            {
              q: t('faq8Question'),
              a: t('faq8Answer'),
            },
            {
              q: t('faq9Question'),
              a: t('faq9Answer'),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default function InformationPage() {
  return (
    <AppLayout>
      <InformationPageContent />
    </AppLayout>
  );
}
