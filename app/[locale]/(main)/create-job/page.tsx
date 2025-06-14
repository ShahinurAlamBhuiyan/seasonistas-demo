"use client";

import { useRouter } from "next/navigation";
import { Step, Stepper } from "@material-tailwind/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import type { InputProps } from "react-html-props";
import toast from "react-hot-toast";
import { useTranslations } from 'next-intl';

import { AppLayout } from "~/components/AppLayout/AppLayout";

import { GeneralInfoStep } from "./steps/GeneralInfoStep";
import { SpecificInfoStep } from "./steps/SpecificInfoStep";
import { CompanyInfoStep } from "./steps/CompanyInfoStep";
import { QuestionsStep } from "./steps/QuestionsStep";
import { apiRoutes } from "~/app/api-routes";
import { Button } from "~/components/Button/Button";
import { isDev } from "~/app/utils/misc";
import { useAuthState } from "~/app/providers/auth-state";

function useSelectionController() {
  const groupIdToStates = useRef<Record<string, Record<string, boolean>>>(
    {}
  ).current;

  function register(groupId: string, itemId: string) {
    if (!groupIdToStates[groupId]) {
      groupIdToStates[groupId] = {};
    }

    let groupState = groupIdToStates[groupId];
    groupState[itemId] = false;
    return {
      onChange: (event) => {
        let checked = !!event.target.checked;
        groupState[itemId] = checked;
      },
    } as InputProps;
  }

  function getGroups() {
    return Object.keys(groupIdToStates);
  }

  function getGroupStates(groupId: string) {
    return groupIdToStates[groupId];
  }

  function getGroupList(groupId: string) {
    let states = getGroupStates(groupId);
    let items: string[] = [];
    for (const itemId in states) {
      if (states[itemId]) {
        items.push(itemId);
      }
    }

    return items;
  }

  return {
    register,
    getGroups,
    getGroupStates,
    getGroupList,
  };
}

export type SelectionController = ReturnType<typeof useSelectionController>;

function useQuestionsBank() {
  type QuestionEntry = {
    id: number;
    question: string;
  };

  const questionsRef = useRef<QuestionEntry[]>([]);

  function set(questions: QuestionEntry[]) {
    questionsRef.current = questions;
  }

  function get() {
    return questionsRef.current;
  }

  return { set, get };
}

export type QuestionsBank = ReturnType<typeof useQuestionsBank>;

export default function CreateJobPage() {
  const t = useTranslations('createJob');

  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  let [pageIndex, setPageIndex] = useState(0);
  const { user } = useAuthState();
  const { register, watch, reset, getValues } = useForm<any>({
    defaultValues: {
      companyName: user?.['companyName'] || undefined,
    }
  });

  if (typeof window !== "undefined") {
    // @ts-ignore
    window.getValues = getValues;
  }

  const selCtrl = useSelectionController();
  if (typeof window !== "undefined") {
    // @ts-ignore
    window.selCtrl = selCtrl;
  }

  const qsBank = useQuestionsBank();

  if (typeof window !== "undefined") {
    // @ts-ignore
    window.qsBank = qsBank;
  }

  function onNext() {
    if (isLoading) return;

    if (pageIndex == steps.length - 1) {
      postJob();
      return;
    }
    setPageIndex((x) => Math.min(steps.length - 1, x + 1));
  }

  function onCancel() {
    if (isLoading) return;

    setPageIndex((x) => Math.max(0, x - 1));
  }

  async function postJob() {
    let values = getValues();
    let payload = {
      title: values["title"],
      description: values["description"],
      category: values["category"],
      specialism: values["specialism"],
      jobType: values["jobType"],

      expLevelRequired: values["expLevelRequired"],

      qualificationsRequired: selCtrl.getGroupList("qualificationsRequired"),
      qualificationsDesired: selCtrl.getGroupList("qualificationsDesired"),

      salaryMode: values["salaryMode"],
      salary: values["salary"],

      startDate: new Date(),
      endDate: new Date(),
      startTime: new Date(),
      endTime: new Date(),

      benefits: selCtrl.getGroupList("benefits"),
      workingLanguage: values["workingLanguage"],
      residence: values["residence"],
      food: values["food"],
      transport: values["transport"],

      // companyName: values["companyName"],
      // companyUsername: values["companyUsername"],
      // companyDescription: values["companyDescription"],
      // companyWebsite: values["companyWebsite"],
      // // companyLogoImageId: "", // Will be set below
      // companyCountry: values["companyCountry"],
      // companyCity: values["companyCity"],
      // companyArea: values["companyArea"],
      // companyZip: values["companyZip"],
      // companyMapAddress: values["companyMapAddress"],

      questions: qsBank
        .get()
        .map((qItem) => qItem.question)
        .filter((s) => s.length > 0),

      // postedAt: values["postedAt"],
    };

    console.log("Posting: ", payload);
    // const companyLogoFileList: FileList = values["companyLogo"];
    // const companyLogoFile = companyLogoFileList[0];

    // if (companyLogoFile) {
    //   let uploadRecord = await apiRoutes.uploadImage(companyLogoFile);
    //   console.log("uploadRecord: ", uploadRecord);
    //   const companyLogoImageId = uploadRecord["_id"];
    //   payload["companyLogoImageId"] = companyLogoImageId;
    // }

    setLoading(true);
    try {
      let result = await toast.promise(apiRoutes.postJob(payload), {
        loading:  t('creatingPost'),
        success: t('postCreated'),
        error: t('errorOccurred'),
      });
      console.log(result);
      const locale = localStorage.getItem("locale") || "en";
      router.push(`/${locale}/postings`);
    } catch {
      setLoading(false);
    }
  }

  let steps = [
    GeneralInfoStep,
    SpecificInfoStep,
    // CompanyInfoStep,
    QuestionsStep,
  ];

  let StepComponent = steps[pageIndex];

  if (isDev) {
    StepComponent = QuestionsStep;
  }

  let progressView = (
    <Stepper
      activeLineClassName="bg-teal"
      className="mt-4"
      activeStep={pageIndex}
    >
      {steps.map((_, index) => (
        // @ts-ignore
        <Step
          key={index}
          activeClassName="!bg-teal"
          completedClassName="!bg-teal"
        >
          {index + 1}
        </Step>
      ))}
    </Stepper>
  );

  return (
    <AppLayout pageTitle={t('pageTitle')}>
      <div className="flex-1 flex items-start">
        <div className="flex-1 px-7 py-8">
          <StepComponent
            onNext={onNext}
            onCancel={onCancel}
            progressView={progressView}
            register={register}
            watch={watch}
            reset={reset}
            selCtrl={selCtrl}
            qsBank={qsBank}
          />
        </div>
      </div>
    </AppLayout>
  );
}