import { Spinner } from "@material-tailwind/react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { apiRoutes } from "~/app/api-routes";

import { CandidateCard } from "./CandidateCard";
import { useTranslations } from "next-intl";
import { Button } from "~/components/Button/Button";

export function HomeProfiles({ activeTab }: { activeTab: string }) {
  const t = useTranslations("home");

  const communityQuery = useInfiniteQuery<any>({
    queryKey: ["homeProfiles"],
    queryFn: async ({ pageParam = 0 }) => {
      return apiRoutes.getCommunity({
        userType: "employee",
        pagelen: 6,
        page: pageParam,
      });
    },
    getNextPageParam: (lastPageData) => lastPageData.nextPage,
    initialPageParam: 0,
  });

  const isLoading = communityQuery.isLoading;
  const userPages = communityQuery.data?.pages || [];

  return (
    <>
      {isLoading ? (
        <div className="flex items-center gap-x-2 py-3">
          <Spinner color="green" />
          <span>{t("loading")}</span>
        </div>
      ) : userPages.length === 0 ? (
        <div className="flex items-center gap-x-2 py-3">
          <span>No data is here</span>
        </div>
      ) : (
        <>
          {userPages.map(({ data: users }) =>
            users.map((employee) => (
              <CandidateCard key={employee["_id"]} employee={employee} />
            ))
          )}
          {communityQuery.isFetchingNextPage || communityQuery.hasNextPage ? (
            <div className="col-span-2 flex justify-center">
              <Button
                variant="outlined"
                loading={communityQuery.isFetchingNextPage}
                className="mt-8 mb-4"
                fullRounded
                onClick={() => communityQuery.fetchNextPage()}
              >
                {t("loadMore")}
              </Button>
            </div>
          ) : null}
        </>
      )}
    </>
  );
}
