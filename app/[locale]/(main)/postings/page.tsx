"use client";

import { AppLayout } from "~/components/AppLayout/AppLayout";
import {
  Tab,
  Tabs,
  TabsHeader,
  TabPanel,
  TabsBody,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";

import { apiRoutes } from "~/app/api-routes";
import { useTranslations } from 'next-intl';

import { PostingCard } from "./PostingCard";

function PostingsListTab({
  postings,
  value,
}: {
  postings: any[];
  value: string;
}) {
  const t = useTranslations('postings');

  return (
    <TabPanel value={value}>
      <div className="space-y-4">
        {postings.map((posting) => (
          <PostingCard key={posting._id} posting={posting} />
        ))}
        {postings.length == 0 && t('noPostingsYet')}
      </div>
    </TabPanel>
  );
}

export default function Postings() {
  const t = useTranslations('postings');
  const { isLoading, data: postings } = useQuery<any[]>({
    queryKey: ["getMyPostings"],
    queryFn: () => apiRoutes.getMyPostings(),
    initialData: [],
    placeholderData: [],
  });

  const all = [...postings];
  const active = postings.filter((posting) => Boolean(posting["isActive"]));
  // TODO: Fix this
  const expired = postings.filter((posting) => !Boolean(posting["isActive"]));

  return (
    <AppLayout>
      <div className="pb-8 pt-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="mb-6 text-2xl font-semibold">{t('yourPostings')}</h3>
          <Tabs value="A" className="mb-6">
            <TabsHeader>
              <Tab value="A">{t('all')}</Tab>
              <Tab value="B">{t('active')}</Tab>
              <Tab value="C">{t('expired')}</Tab>
            </TabsHeader>

            {isLoading ? (
              <div className="flex items-center gap-x-2 py-3">
                <Spinner color="green" />
                <span>{t('loading')}</span>
              </div>
            ) : (
              <TabsBody
                animate={{
                  initial: {},
                  mount: {},
                  unmount: {},
                }}
              >
                <PostingsListTab value="A" postings={all} />
                <PostingsListTab value="B" postings={active} />
                <PostingsListTab value="C" postings={expired} />
              </TabsBody>
            )}
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
}
