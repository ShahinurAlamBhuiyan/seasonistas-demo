import { Button } from "~/components/Button/Button";
import { Input, TextArea } from "~/components/Input/Input";
import { Select } from "~/components/Select/Select";
import { FormLabel } from "~/components/FormLabel/FormLabel";
import { StepForm, StepProps } from "./common";
import { Checkbox } from "@material-tailwind/react";
import { repeatNode } from "~/app/utils/markup";
import { useTranslations } from "next-intl";

import "rsuite/DateRangePicker/styles/index.css";
import DateRangePicker from "rsuite/DateRangePicker";

import "rsuite/TimeRangePicker/styles/index.css";
import TimeRangePicker from "rsuite/TimeRangePicker";
import type { InputProps } from "react-html-props";

function FormCheckbox({
  label,
  ...rest
}: { label: string } & Omit<InputProps, "color">) {
  return (
    <label className="flex items-center cursor-pointer gap-2 p-2 select-none">
      <Checkbox
        {...rest}
        ripple={false}
        containerProps={{ className: "p-0" }}
        className="hover:before:content-none"
      />
      <span className="flex-1">{label}</span>
    </label>
  );
}

export function SpecificInfoStep({
  onNext,
  onCancel,
  progressView,
  register,
  selCtrl,
}: StepProps) {
  const t = useTranslations("createJob");

  return (
    <>
      <h1 className="font-semibold text-2xl text-center md:text-left">
        {t("additionalInformation")}
      </h1>

      {progressView}

      <StepForm onNext={onNext}>
        <div className="bg-teal/5 p-7 mt-7 rounded-xl space-y-6">
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-[1]">
              <FormLabel showAsterik label={t("jobType")}>
                <Select selectProps={register("jobType")} variant="light">
                  <option value="fullTime">{t("fullTime")}</option>
                  <option value="partTime">{t("partTime")}</option>
                  <option value="flexible">{t("flexible")} </option>
                </Select>
              </FormLabel>
            </div>

            <div className="flex-[1]">
              <FormLabel showAsterik label={t("experienceLevel")}>
                <Select
                  selectProps={register("expLevelRequired")}
                  variant="light"
                >
                  <option value="entry">{t("entryLevel")}</option>
                  <option value="mid">{t("midLevel")}</option>
                  <option value="senior">{t("seniorLevel")}</option>
                </Select>
              </FormLabel>
            </div>
          </div>

          <div>
            Relevant skills
            <div className="p-0 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
              {[
                t("universityDegree"),
                t("softwareProficiency"),
                t("excellentEnglish"),
                t("basicEnglish"),
                t("additionalLanguages"),
                t("timeManagement"),
                t("problemSolving"),
                t("teamCollaboration"),
                t("travelAvailability"),
                t("industryKnowledge"),
                t("creativeThinking"),
                t("flexibleHours"),
                t("customerService"),
                t("cashRegisterProficiency"),
                t("longTermCollaboration"),
              ].map((skill, index) => (
                <FormCheckbox
                  {...selCtrl.register("qualificationsRequired", skill)}
                  key={index}
                  label={skill}
                  className="form-checkbox"
                />
              ))}
            </div>
          </div>

          {/* <div>
            Desirable Qualifications
            <div className="p-0 grid grid-cols-2 xl:grid-cols-5">
              {repeatNode(10, (index) => {
                const qualName = `Qualification ${index + 1}`;
                return (
                  <FormCheckbox
                    {...selCtrl.register("qualificationsDesired", qualName)}
                    key={index}
                    label={qualName}
                  />
                );
              })}
            </div>
          </div> */}

          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-[1]">
              <FormLabel showAsterik label={t("salary")}>
                <div className="flex flex-1 w-full gap-x-1">
                  <Select selectProps={register("salaryMode")} variant="light">
                    <option value="monthly">{t("daily")}</option>
                    <option value="hourly">{t("hourly")}</option>
                    <option value="hourly">Monthly</option>
                  </Select>
                  <Input
                    {...register("salary")}
                    className="flex-1"
                    required
                    placeholder={t("enterSalaryRange")}
                  />
                </div>
                {/* <p className="italic">Suggested = $16100</p> */}
              </FormLabel>
            </div>
            <div className="flex-[1]">
              <FormLabel
                showAsterik
                label={t("workingPeriod")}
                className="h-full"
              >
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  {/* TODO: Date picker */}
                  <DateRangePicker
                    className="flex-1 [&>*]:!h-full"
                    appearance="subtle"
                    placeholder={t("selectDates")}
                  />
                </div>
              </FormLabel>
            </div>
          </div>

          <div>
            Additional Benefits
            <div className="p-0 grid grid-cols-2 xl:grid-cols-5">
              {[
                t("performanceBonuses"),
                t("giftsAllowances"),
                t("overtime"),
                t("commissions"),
                t("mobilePhone"),
                t("companyLaptop"),
                t("extraVacationDays"),
                t("parentalLeave"),
                t("trainingSeminars"),
                t("productDiscounts"),
              ].map((benefitName) => (
                <FormCheckbox
                  key={benefitName}
                  {...selCtrl.register("benefits", benefitName)}
                  label={benefitName}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <FormLabel showAsterik label={t("workingLanguage")}>
                <Select
                  selectProps={register("workingLanguage")}
                  variant="light"
                >
                  <option>{t("english")}</option>
                  <option>{t("italian")}</option>
                  <option>{t("spanish")}</option>
                  <option>{t("french")}</option>
                  <option>{t("greek")}</option>
                </Select>
              </FormLabel>
            </div>
            <div className="flex-1">
              <FormLabel showAsterik label={t("residence")}>
                <Select selectProps={register("residence")} variant="light">
                  <option value="yes">{t("yes")}</option>
                  <option value="no">{t("no")}</option>
                  <option value="allowance">{t("housingAllowance")}</option>
                </Select>
              </FormLabel>
            </div>
          </div>

          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <FormLabel showAsterik label={t("food")}>
                <Select selectProps={register("food")} variant="light">
                  <option value="yes">{t("provided")}</option>
                  <option value="no">{t("notProvided")}</option>
                  <option value="oneMeal">{t("oneMeal")}</option>
                  <option value="twoMeal">{t("twoMeal")}</option>
                  <option value="allowance">{t("mealAllowance")}</option>
                </Select>
              </FormLabel>
            </div>
            <div className="flex-1">
              <FormLabel label={t("transport")}>
                <Select selectProps={register("transport")} variant="light">
                  <option value="required">{t("required")}</option>
                  <option value="notRequired">{t("notRequired")}</option>
                  <option value="mopedProvided">{t("mopedProvided")}</option>
                  <option value="carProvided">{t("carProvided")}</option>
                </Select>
              </FormLabel>
            </div>
          </div>

          <div className="pt-6">
            <div className="flex gap-x-3">
              <Button onClick={onCancel} variant="outlined" fullRounded>
                {t("back")}
              </Button>
              <Button type="submit" fullRounded>
                {t("next")}
              </Button>
            </div>
          </div>
        </div>
      </StepForm>
    </>
  );
}
