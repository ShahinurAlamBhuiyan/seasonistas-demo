import "./Filters.css";

import clsx from "clsx";
import {
  IconBriefcase2,
  IconChevronDown,
  IconCirclePlusFilled,
  IconMapPin,
  IconMathEqualGreater,
  IconMathEqualLower,
} from "@tabler/icons-react";
import {
  Fragment,
  isValidElement,
  PropsWithChildren,
  useState,
  Children,
  ReactNode,
} from "react";

import { RichInput } from "~/components/Input/Input";
import { Button } from "~/components/Button/Button";
import { Select } from "~/components/Select/Select";
import { useTranslations } from "next-intl";

// app/(main)/create-job/steps/GeneralInfoStep.tsx
import allJobs from "../../create-job/jobs.json";

import { SwitchOption } from "./SwitchOption";
import { RangeSlider } from "./RangeSlider";
import { useViewMode } from "~/app/providers/auth-state";
import { FilterController } from "./ctrl";

type FilterProps = PropsWithChildren & { label: string };

export function Filter(_props: FilterProps) {
  return null;
}

const collectFilterProps = (children: ReactNode): FilterProps[] => {
  const propsArray: FilterProps[] = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === Filter) {
        let props = child.props as FilterProps;
        propsArray.push(props);
      } else if (child.type === Fragment) {
        propsArray.push(...collectFilterProps(child.props.children));
      }
    }
  });

  return propsArray;
};

function FilterList({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) {
  let [openIndex, setOpenIndex] = useState(-1);

  let filterConfigs = collectFilterProps(children)?.filter(Boolean) || [];

  return (
    <div className={className}>
      <div className="flex flex-wrap overflow-auto gap-3 pb-2">
        {filterConfigs.map((filter, index) => {
          let open = openIndex === index;
          return (
            <div key={index}>
              <button
                onClick={() => {
                  if (openIndex === index) {
                    setOpenIndex(-1);
                  } else {
                    setOpenIndex(index);
                  }
                }}
                className={clsx(
                  "flex justify-between w-full items-center gap-x-2 rounded-xl",
                  "bg-teal text-white hover:bg-teal-dark",
                  "px-4 py-2"
                )}
              >
                <p className="whitespace-nowrap">{filter.label}</p>
                <IconChevronDown
                  className={clsx("ta", open && "-rotate-180")}
                />
              </button>
            </div>
          );
        })}
      </div>
      {openIndex > -1 && (
        <div key={openIndex} className="mt-4">
          {filterConfigs[openIndex].children}
        </div>
      )}
    </div>
  );
}

export function Filters({
  className,
  filterCtrl,
}: {
  className?: string;
  filterCtrl: FilterController;
}) {
  const viewMode = useViewMode();
  const t = useTranslations("filters");

  let { register } = filterCtrl;

  return (
    <FilterList className={className}>
      <Filter label={t("location")}>
        <RichInput
          icon={<IconMapPin size={17} />}
          inputProps={{
            ...register("location"),
            placeholder: t("locationPlaceholder"),
          }}
        />
        {/* Remove the radius since location is text based for now */}
        {/* <p className="text-black/80 text-sm mt-3 mb-3">
        {t('radius')}
        </p>
        <RangeSlider />

        <Button fullRounded className="mx-auto">
          100 km
        </Button> */}
      </Filter>
      {viewMode === "employee" && (
        <>
          <Filter label="Category">
            <Select
              selectProps={register("category")}
              icon={<IconBriefcase2 size={17} />}
            >
              <option value="">Choose a category</option>
              {allJobs.map((job, index) => (
                <option value={allJobs[index].category} key={index}>
                  {job.category}
                </option>
              ))}
            </Select>
          </Filter>
          <Filter label={t("salary")}>
            <div className="space-y-2.5 mb-4">
              <SwitchOption defaultChecked label={"Monthly"} />
              <SwitchOption defaultChecked label={"Daily"} />
              <SwitchOption defaultChecked label={"Hourly"} />
            </div>
            <div className="flex gap-x-4">
              <RichInput inputProps={{ placeholder: t("minSalary") }} />
              <RichInput inputProps={{ placeholder: t("maxSalary") }} />
            </div>
          </Filter>
          <Filter label={t("jobType")}>
            <div className="space-y-2.5">
              <SwitchOption
                {...register("jobType.fullTime")}
                label={t("fullTime")}
              />
              <SwitchOption
                {...register("jobType.partTime")}
                label={t("partTime")}
              />
              <SwitchOption
                {...register("jobType.internship")}
                label={t("internship")}
              />
              <SwitchOption
                {...register("jobType.specificDates")}
                label={t("temporary")}
              />
            </div>
          </Filter>
          <Filter label={t("experienceLevel")}>
            <div className="space-y-2.5">
              <SwitchOption
                {...register("expLevelRequired.entry")}
                label={t("entryLevel")}
              />
              <SwitchOption
                {...register("expLevelRequired.mid")}
                label={t("midLevel")}
              />
              <SwitchOption
                {...register("expLevelRequired.senior")}
                label={t("seniorLevel")}
              />
            </div>
          </Filter>
          <Filter label={t("datePosted")}>
            <div className="space-y-2.5">
              <SwitchOption {...register("datePosted.all")} label="All" />
              <SwitchOption
                {...register("datePosted.lastHour")}
                label={t("lastDay")}
              />
              <SwitchOption
                {...register("datePosted.last24Hours")}
                label={t("lastWeek")}
              />
              <SwitchOption
                {...register("datePosted.last7Days")}
                label={t("lastMonth")}
              />
            </div>
          </Filter>
        </>
      )}
    </FilterList>
  );
}
