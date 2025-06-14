import { Button } from "~/components/Button/Button";
import { Input, TextArea } from "~/components/Input/Input";
import { Select } from "~/components/Select/Select";
import { FormLabel } from "~/components/FormLabel/FormLabel";
import { StepForm, StepProps } from "./common";
import { useTranslations } from 'next-intl';
import allJobs from "../jobs.json";
import { ChangeEvent, useEffect, useState } from "react";

function ProposalTemplateCard() {
  const t = useTranslations('createJob');
  console.log(t);
  return (
    <div className="border-gray-line-2/50 border rounded-xl px-5 py-5">
      <h3 className="font-semibold text-lg mt-3">{t('automationEngineerDescription')}</h3>
      <p className="text-black/70 mt-1">{t('useThisTemplate')}</p>
      <div className="mt-4 flex items-center gap-x-2 mb-4">
        <Button fullRounded>{t('useThisTemplate')}</Button>
      </div>
    </div>
  );
}

export function bindIndexSelector(selectFn: any) {
  return (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.selectedOptions[0];
    const index = +selectedOption!.getAttribute("data-index")!;
    selectFn(index);
  };
}

export function GeneralInfoStep({
  onNext,
  onCancel,
  progressView,
  register,
}: StepProps) {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const t = useTranslations('createJob');
  useEffect(() => {
    setSelectedRoleIndex(0);
  }, [selectedJobIndex]);

  let jobs = allJobs;
  let specialisms = allJobs[selectedJobIndex].specialisms;

  let selectedRole = specialisms[selectedRoleIndex];

  return (
    <>
      <h1 className="font-semibold text-2xl text-center md:text-left">
      {t('postNewJob')}
      </h1>
      {progressView}

      <StepForm onNext={onNext}>
        <div className="bg-teal/5 p-7 mt-7 rounded-xl space-y-6">
          <FormLabel showAsterik label={t('enterJobTitle')}>
            <Input {...register("title")} required placeholder={t('jobTitle')} />
          </FormLabel>
          <FormLabel showAsterik label={t('jobDescription')}>
            <TextArea
              {...register("description")}
              required
              className="h-40"
              placeholder={t('enterJobDescription')}
            />
          </FormLabel>

          <FormLabel showAsterik label={t('jobCategory')}>
            <Select
              selectProps={register("category")}
              variant="light"
              value={jobs[selectedJobIndex].category}
              onChange={bindIndexSelector(setSelectedJobIndex)}
            >
              {jobs.map((job, index) => (
                <option
                  data-index={index}
                  value={jobs[index].category}
                  key={index}
                >
                  {job.category}
                </option>
              ))}
            </Select>
          </FormLabel>
          <FormLabel showAsterik label={t('specialisms')}>
            <Select
              selectProps={register("specialism")}
              variant="light"
              value={specialisms[selectedRoleIndex].title}
              onChange={bindIndexSelector(setSelectedRoleIndex)}
            >
              {specialisms.map((role, index) => (
                <option
                  data-index={index}
                  value={specialisms[index].title}
                  key={index}
                >
                  {role.title}
                </option>
              ))}
            </Select>
          </FormLabel>

          <p className="!mt-2 italic">{selectedRole.info}</p>

          <div className="pt-6">
            <div className="flex gap-x-3">
              <Button onClick={onCancel} variant="outlined" fullRounded>
              {t('back')}
              </Button>
              <Button type="submit" fullRounded>
              {t('next')}
              </Button>
            </div>
          </div>
        </div>
      </StepForm>
    </>
  );
}
