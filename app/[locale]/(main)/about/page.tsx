"use client";

import ResumeIcon from "~/app/assets/icon-resumes.svg";
import JobIcon from "~/app/assets/icon-job.svg";
import HelpIcon from "~/app/assets/icon-help.svg";

import Hero1 from "~/app/assets/about-p1.jpg";
import Hero2 from "~/app/assets/about-p2.jpg";
import Hero3 from "~/app/assets/about-p3.jpg";
import Hero4 from "~/app/assets/about-p4.jpg";
import Hero5 from "~/app/assets/about-p5.jpg";
import Hero6 from "~/app/assets/about-p6.jpg";
import Hero7 from "~/app/assets/about-p7.jpg";

import Image from "next/image";


import { AppLayout } from "~/components/AppLayout/AppLayout";
import { TitleMark } from "~/components/decorations";
import clsx from "clsx";

import { FrequentlyAskedQuestions } from "~/components/FrequentlyAskedQuestions";
import { OurTeam } from "./OurTeam";
import { IconBrandInstagram, IconMailFilled } from "@tabler/icons-react";
import './About.css';
import { useTranslations } from 'next-intl';
import { ContactUsForm } from "./ContactUsForm";


function ContactInfoBlock({ Icon, title, href }: { Icon: any; title: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center max-w-sm">
      <div
        className={clsx(
          "border-black/20 border w-14 h-14 flex items-center justify-center",
          "rounded-full"
        )}
      >
        <Icon size={27} className='text-teal' />
      </div>
      <h2 className='text-md text-black/50 mt-4 font-semibold'>{title}</h2>
    </a>
  );
}

function StatBlock({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="space-y-2 w-56">
      <h3 className="font-semibold text-2xl md:text-4xl text-center">
        {title}
      </h3>
      <p className="text-black/50 font-normal text-esm md:text-base text-center">
        {desc}
      </p>
    </div>
  );
}

function HeroImageSet() {
  return (
    <>
      {/* Desktop */}
      <div
        className={clsx(
          "hidden sm:grid",
          "[&_img]:rounded-xl [&_img]:object-cover mt-10 app-container",
          "grid-rows-[auto,45px,auto] grid-cols-[repeat(4,1fr)] gap-1 md:gap-4"
        )}
      >
        <div className="row-[1/-1] col-[1]">
          <Image alt="" src={Hero1} className="h-full" />
        </div>

        <div className="row-[1/2] col-[2]">
          <Image alt="" src={Hero2} className="w-full" />
        </div>
        <div className="row-[2/4] col-[2]">
          <Image alt="" src={Hero3} className="h-full" />
        </div>
        <div className="row-[1/3] col-[3]">
          <Image alt="" src={Hero4} className="h-full" />
        </div>
        <div className="row-[3/4] col-[3]">
          <Image alt="" src={Hero5} className="w-full" />
        </div>

        <div className="row-[1/-1] col-[4]">
          <Image alt="" src={Hero6} className="h-full" />
        </div>
      </div>
      {/* Mobile */}
      <div
        className={clsx(
          "flex sm:hidden",
          "mt-8 gap-x-3",
          "items-start overflow-hidden",
          "[&_img]:rounded-xl [&_img]:object-cover"
        )}
      >
        <Image
          alt=""
          src={Hero1}
          className="w-[46%] shrink-0 aspect-[1.7] -ml-10"
        />
        <Image alt="" src={Hero7} className="w-[46%] shrink-0 aspect-[1.7]" />
        <Image alt="" src={Hero4} className="w-[46%] shrink-0 aspect-[1.7]" />
      </div>
    </>
  );
}

function TopSection() {
  const t = useTranslations('about');

  return (
    <>
      <div className="app-container w-full pt-10">
        {/* Title */}
        <h1 className="text-4xl text-center">
          <span className="font-bold text-teal mr-1 relative bg-bdlue-600">
          {t('who')}
            <TitleMark className="absolute w-32 top-full -left-5 dd -translate-y-2.5" />
          </span>
          <span className="font-normal"> {t('weAre')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-justify text-xl font-normal text-black/50 mt-6 mx-auto">
          {t('weAreDescription')}
        </p>
      </div>

      <HeroImageSet />

      <div className="app-container w-full pb-10">
        {/* Stats */}
        <div className="flex justify-center mt-6 md:mt-16 gap-x-6 md:gap-x-24">
          <StatBlock title="4M" desc={t('dailyActiveUsers')} />
          <StatBlock title="12k" desc={t('openJobPositions')} />
          <StatBlock title="20M" desc={t('storiesShared')} />
        </div>

        {/* About text */}
        <h1 className="text-3xl font-semibold mt-12 text-justify md:text-left">
        {t('aboutSeasonistas')}
        </h1>

        <section className="space-y-8 mt-4 text-black/50 text-md text-justify md:text-left">
          <p>
            {t('aboutSeasonistasDescription1')}
          </p>
          <p>
            {t('aboutSeasonistasDescription2')}
          </p>
        </section>
        <h1 className="text-3xl font-semibold mt-12 text-center md:text-left">
        {t('ourMission')}
        </h1>

        <section className="space-y-8 mt-4 text-black/50 text-md text-justify md:text-left">
          <p>
          {t('ourMissionDescription1')}
          </p>
          <p>
          {t('ourMissionDescription2')}
          </p>
        </section>

        <h1 className="text-3xl font-semibold mt-12 text-center md:text-left">
        {t('ourValues')}
        </h1>

        <section className="space-y-8 mt-4 text-black/50 text-md text-justify md:text-left">
          <p>
          {t('ourValuesDescription')}
          <ul className="circle-bullets">
            <li>{t('transparency')}</li>
            <li>{t('respect')}</li>
            <li>{t('growth')}</li>
          </ul>
          </p>

        </section>
      </div>
    </>
  );
}

/* ============================================== */

function FeatureBlock({ Icon, title }: { Icon: any; title: string }) {
  const t = useTranslations('about');

  return (
    <div className="flex flex-col items-center md:max-w-sm">
      <div
        className={clsx(
          "bg-black w-16 h-16 flex items-center justify-center",
          "rounded-full"
        )}
      >
        {Icon && <Icon className="w-7" />}
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
        {t('featureDescription')}
        </p>
      </div>
    </div>
  );
}

function BottomSection() {
  const t = useTranslations('about');

  return (
    <div className="app-container w-full">
      {/* Title */}
      <h1 className="text-4xl text-center">
        <span className="font-bold text-teal mr-1 relative bg-bdlue-600">
        {t('whatWe')}
        <TitleMark className="absolute w-48 top-full -left-8 dd -translate-y-1.5" />
        </span>
        <span className="font-normal"> {t('do')}</span>
      </h1>

      {/* Subtitle */}
      <p className="text-justify text-xl font-normal text-black/50 mt-6 mx-auto">
        {t('whatWeDoDescription')}
      </p>

      {/* Features */}
      <div className="flex max-md:flex-col justify-center gap-x-3 gap-y-8 mt-16">
        <FeatureBlock Icon={ResumeIcon} title={t('freeResumeAssessments')} />
        <FeatureBlock Icon={JobIcon} title={t('jobFitScoring')} />
        <FeatureBlock Icon={HelpIcon} title={t('helpEveryStep')} />
      </div>

      <h1 className="text-3xl font-semibold mt-12 text-center md:text-left">
      {t('socialResponsibility')}
      </h1>

      <section className="space-y-8 mt-4 text-black/50 text-md text-justify md:text-left">
        <p>
        {t('socialResponsibilityDescription1')}
        </p>
        <p>
        {t('socialResponsibilityDescription2')}
        </p>
        <p>
        {t('socialResponsibilityDescription3')}
        </p>
      </section>

      {/* Follow */}
      {/* <h1 className="text-xl font-semibold mt-12 text-center">Follow us At</h1>
      <div className="flex justify-center gap-x-10 sm:gap-x-20 gap-y-12 mt-4">
        <ContactInfoBlock
          Icon={IconBrandInstagram}
          title="@seasonistas"
          href="https://www.instagram.com/seasonistas"
        />
        <ContactInfoBlock
          Icon={IconMailFilled}
          title="info@seasonistas.com"
          href="mailto:info@seasonistas.com"
        />
      </div> */}
    </div>
  );
}

/* ============================================== */

export default function AboutUs() {
  const t = useTranslations('about');
  return (
    <AppLayout>
      <TopSection />
      <BottomSection />
      <ContactUsForm />
      {/* <div className="app-container w-full pb-20">
        <h1 className="text-4xl text-center mt-12 mb-8">
          <span className="font-bold text-teal mr-1 relative bg-bdlue-600">
          {t('frequently')}
            <TitleMark className="absolute w-32 top-full -left-5 dd -translate-y-2.5" />
          </span>
          <span className="font-normal"> Asked Questions</span>
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
      </div> */}
    </AppLayout>
  );
}
