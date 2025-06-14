"use client";

import clsx from "clsx";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { DivProps } from "react-html-props";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { IconAdjustmentsHorizontal, IconSearch } from "@tabler/icons-react";
import { IconUsers, IconBooks, IconHeart, IconNotebook } from "@tabler/icons-react";
import PIconEye from "~/app/assets/p-eye.svg";


import { AppLayout } from "~/components/AppLayout/AppLayout";
import { Button } from "~/components/Button/Button";
import { Select } from "~/components/Select/Select";
import { useViewMode } from "~/app/providers/auth-state";

import { Filters } from "./filters/Filters";
import { HomePostings } from "./HomePostings/HomePostings";
import { HomeProfiles } from "./HomeProfiles/HomeProfiles";
import { useFilterController } from "./filters/ctrl";
import { useTranslations } from "next-intl";

function PageTitle(props: DivProps) {
  const t = useTranslations("home");
  return (
    <div {...props}>
      <h1 className="font-semibold text-3xl">{t("marketingLandingPage")}</h1>
    </div>
  );
}

function PrimaryTabButton({
  shortLabel,
  label,
  icon,
  selected,
  onClick,
}: {
  shortLabel: string;
  label: string;
  icon?: ReactNode;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={clsx(
        "outline-none",
        "md:h-full flex md:flex-1 items-center md:justify-center max-sm:text-sm gap-x-2 tc",
        "whitespace-nowrap",
        selected ? "md:bg-teal md:text-white text-teal" : "text-black/30"
      )}
      onClick={onClick}
    >
      {icon}
      <p className="sm:block hidden">{label}</p>
      <p className="sm:hidden block">{shortLabel}</p>
    </button>
  );
}

function PrimaryTabs({
  className,
  activeTab,
  setActiveTab,
}: DivProps & { activeTab?: string; setActiveTab?: (_: string) => void }) {
  let viewMode = useViewMode();
  const t = useTranslations("home");

  return (
    <div
      className={clsx(
        "app-container flex-1 -mx-7 max-md:pb-3 max-md:border-b max-md:border-black/10 overflow-auto",
        className
      )}
    >
      <div
        className={clsx(
          "md:border md:border-black/20",
          "md:h-20 w-full md:rounded-xl md:overflow-hidden flex",
          "md:divide-x divide-black/20",
          "gap-x-6 md:gap-x-0"
        )}
      >
        <PrimaryTabButton
          shortLabel={t('allProfiles')}
          label={viewMode === "employer" ? t('allProfiles') : t('allJobs')}
          icon={<IconUsers />}
          selected={activeTab === "one"}
          onClick={() => setActiveTab?.("one")}
        />
        <PrimaryTabButton
          shortLabel={t('saved')}
          label={t('saved')}
          icon={<IconHeart />}
          selected={activeTab === "two"}
          onClick={() => setActiveTab?.("two")}
        />
        <PrimaryTabButton
          shortLabel={t('jobsApplied')}
          label={t('jobsApplied')}
          icon={<IconNotebook />}
          selected={activeTab === "three"}
          onClick={() => setActiveTab?.("three")}
        />
       
      </div>
    </div>
  );
}

function SearchControls({
  onFilter,
  ...props
}: { onFilter: (filters: any) => void } & DivProps) {
  let [showFilters, setShowFilters] = useState(false);

  const filterCtrl = useFilterController(onFilter);
  const { register } = filterCtrl;
  const t = useTranslations("home");

  return (
    <div {...props}>
      <div className="flex max-md:flex-col max-md:items-stretch items-center gap-2">
        <div className="border border-black/20 rounded-xl flex-1 flex overflow-hidden px-2.5 py-2.5 gap-x-1.5">
          <IconSearch size={17} className="self-center" />
          <input
            {...register("title")}
            size={1}
            className="flex-1 outline-none"
            placeholder={t("jobTitlePlaceholder")}
          />
        </div>
        <Button
          variant="outlined"
          fullRounded
          className="!px-10 !gap-x-2"
          onClick={() => setShowFilters((x) => !x)}
        >
          <IconAdjustmentsHorizontal />
          {t("filters")}
        </Button>
        <div className="flex items-center gap-x-2.5">
          {t("sort")}:
          <Select selectProps={register("sort")}>
            <option value="datePosted">{t("datePosted")}</option>
            <option value="popularity">{t("popularity")}</option>
            <option value="high-low">{t("salaryHighLow")}</option>
          </Select>
        </div>
      </div>
      {showFilters && <Filters filterCtrl={filterCtrl} className="mt-4" />}
    </div>
  );
}

export default function HomeProposalsPage() {
  const viewMode = useViewMode();
  const [filters, setFilters] = useState<any>({});
  const t = useTranslations("home");

  const [activeTab, setActiveTab] = useState("one");

  return (
    <AppLayout pageTitle="Proposals">
     
      <div className="app-container py-8 w-full">
        <div className="hidden md:block flex-1">
          <PageTitle />
          
          <PrimaryTabs
            className="mt-5"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SearchControls onFilter={setFilters} className="mt-4" />
        </div>
        {/* <div className="md:hidden block flex-1"> */}
        {/* <PrimaryTabs activeTab={activeTab} setActiveTab={setActiveTab} /> */}
        {/* <PageTitle className="mt-4" /> */}
        {/* <SearchControls onFilter={setFilters} className="mt-4" /> */}
        {/* </div> */}

        <div className="mt-4 grid wl:grid-cols-2 gap-6">
          {viewMode === "employer" ? (
            <HomeProfiles activeTab={activeTab} />
          ) : (
            <HomePostings activeTab={activeTab} filters={filters} />
          )}
        </div>
      </div>
    </AppLayout>
  );
}
