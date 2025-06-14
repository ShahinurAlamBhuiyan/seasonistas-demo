"use client";

import { Tab, TabPanel, Tabs, TabsHeader } from "@material-tailwind/react";
import { TabsBody } from "@material-tailwind/react";
import { useViewMode } from "~/app/providers/auth-state";
import { useTranslations } from 'next-intl';

function InfoStep1() {
  const viewMode = useViewMode();
  const t = useTranslations('information');

  return (
    <section className="mt-8 space-y-6">
      <h1 className="text-4xl  text-center font-bold py-4">
        {t('rightsAndResponsibilities')}
      </h1>

      <h1 className="text-2xl text-center font-bold pt-4">
        {t('guideToRightsAndResponsibilities')}
      </h1>
      <p>
        {t('rightsAndResponsibilitiesDescription')}
      </p>
      <h1 className="text-2xl font-bold pt-4">
        {t('workRegulationsAndContracts')}
      </h1>
      <p>
        {t('workRegulationsAndContractsDescription')}
      </p>
      <h1 className="text-2xl font-bold pt-4">
        {t('legislationAndRegulations')}
      </h1>
      <p>
        {t('legislationAndRegulationsDescription')}
      </p>
      {viewMode === "employee" && (
        <>
          <h1 className="text-2xl font-bold pt-4">{t('guideForForeignWorkers')}</h1>
          <p>
            {t('guideForForeignWorkersDescription')}
          </p>
        </>
      )}
      <h1 className="text-2xl font-bold pt-4">{t('insurancePolicies')}</h1>
      <p>
        {t('insurancePoliciesDescription')}
      </p>
    </section>
  );
}

function InfoStep2() {
  const viewMode = useViewMode();
  const t = useTranslations('information');

  return (
    <section className="mt-8 space-y-6">
      <h1 className="text-4xl font-bold py-4 max-w-3xl">
        {t('personnelManagement')}
      </h1>

      {viewMode === "employee" && (
        <>
          <h1 className="text-2xl font-bold pt-4">{t('hiringProcesses')}</h1>
          <p>
            {t('hiringProcessesDescription')}
          </p>
        </>
      )}
      <h1 className="text-2xl font-bold pt-4">
        {t('creatingTheRightProfile')}
      </h1>
      <p>
        {t('creatingTheRightProfileDescription')}
      </p>
      {viewMode === "employer" && (
        <>
          <h1 className="text-2xl font-bold pt-4">{t('staffRecruitmentGuide')}</h1>
          <p>
            {t('staffRecruitmentGuideDescription')}
          </p>
          <h1 className="text-2xl font-bold pt-4">{t('hiringForeignWorkers')}</h1>
          <p>
            {t('hiringForeignWorkersDescription')}
          </p>
          <h1 className="text-2xl font-bold pt-4">{t('managingSeasonalStaff')}</h1>
          <p>
            {t('managingSeasonalStaffDescription')}
          </p>
        </>
      )}
      <h1 className="text-2xl font-bold pt-4">
        {t('personnelManagementTools')}
      </h1>
      <p>
        {t('personnelManagementToolsDescription')}
      </p>
      <h1 className="text-2xl font-bold pt-4">{t('payrollCalculation')}</h1>
      <p>
        {t('payrollCalculationDescription')}
      </p>
    </section>
  );
}

function InfoStep3() {
  const t = useTranslations('information');

  return (
    <section className="mt-8 space-y-6">
      <h1 className="text-4xl font-bold py-4 max-w-3xl">
        {t('educationAndCareer')}
      </h1>

      <h1 className="text-2xl font-bold pt-4">
        {t('trainingSeminarsAndCertifications')}
      </h1>
      <p>
        {t('trainingSeminarsAndCertificationsDescription')}
      </p>
      <h1 className="text-2xl font-bold pt-4">{t('staffTrainingPrograms')}</h1>
      <p>{t('staffTrainingProgramsDescription')}</p>
      <h1 className="text-2xl font-bold pt-4">{t('careerAdvice')}</h1>
      <p>
        {t('careerAdviceDescription')}
      </p>
      <h1 className="text-2xl font-bold pt-4">
        {t('healthAndSafetyGuide')}
      </h1>
      <p>
        {t('healthAndSafetyGuideDescription')}
      </p>
    </section>
  );
}

function InfoStep4() {
  const t = useTranslations('information');

  return (
    <section className="mt-8 space-y-6">
      <h1 className="text-4xl font-bold py-4 max-w-3xl">
        {t('informationAndNetworking')}
      </h1>

      <h1 className="text-2xl font-bold pt-4">{t('newsAndTrends')}</h1>
      <p>
        {t('newsAndTrendsDescription')}
      </p>
      <h1 className="text-2xl font-bold pt-4">
        {t('professionalNetworks')}
      </h1>
      <p>
        {t('professionalNetworksDescription')}
      </p>
      <h1 className="text-2xl font-bold pt-4">{t('interviews')}</h1>
      <p>
        {t('interviewsDescription')}
      </p>
    </section>
  );
}

export function InfoStepper() {
  const t = useTranslations('information');

  return (
    <>
      <Tabs value="A" className="mb-6">
        <TabsHeader>
          <Tab value="A">{t('rightsAndResponsibilities')}</Tab>
          <Tab value="B">{t('personnelManagement')}</Tab>
          <Tab value="C">{t('educationAndCareer')}</Tab>
          <Tab value="D">{t('informationAndNetworking')}</Tab>
        </TabsHeader>
        <TabsBody className="[&_*]:text-black">
          <TabPanel value="A">
            <InfoStep1 />
          </TabPanel>
          <TabPanel value="B">
            <InfoStep2 />
          </TabPanel>
          <TabPanel value="C">
            <InfoStep3 />
          </TabPanel>
          <TabPanel value="D">
            <InfoStep4 />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </>
  );
}