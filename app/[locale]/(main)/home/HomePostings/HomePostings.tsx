"use client";

import { produce } from "immer";
import { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";

import { apiRoutes } from "~/app/api-routes";
import { PostingCard } from "./PostingCard";
import { useTranslations } from "next-intl";
import { Button } from "~/components/Button/Button";

export function HomePostings({
  filters,
  activeTab,
}: {
  filters: any;
  activeTab: string;
}) {
  const t = useTranslations("home");
  const favsQuery = useQuery<any[] | null>({
    queryKey: ["getPostingFavourites"],
    queryFn: () => apiRoutes.getPostingFavourites(),
    initialData: null,
    placeholderData: null,
  });

  const postingsQuery = useInfiniteQuery<any>({
    queryKey: ["homePostings"],
    queryFn: async ({ pageParam = 0 }) => {
      return apiRoutes.searchJobs({
        ...filters,
        pagelen: 6,
        page: pageParam,
      });
    },
    getNextPageParam: (lastPageData) => lastPageData.nextPage,
    initialPageParam: 0,
  });

  const isLoading = favsQuery.isLoading || postingsQuery.isLoading;
  const postingPages = postingsQuery.data?.pages || [];
  const serverPostingFavouriteMarks = favsQuery.data;

  const [favouriteIds, setFavouriteIds] = useState<any[]>([]);

  useEffect(() => {
    if (serverPostingFavouriteMarks == null) return;
    const ids = serverPostingFavouriteMarks.map((mark) => mark["postingId"]);
    setFavouriteIds(ids);
  }, [serverPostingFavouriteMarks]);

  async function markFavourite(posting: string, isFavourite: boolean) {
    const postingId = posting["_id"];

    setFavouriteIds((currentFavouriteIds) =>
      produce(currentFavouriteIds, (draft) => {
        if (isFavourite) {
          // Add the postingId if not already present
          if (!draft.includes(postingId)) {
            draft.push(postingId);
          }
        } else {
          // Remove the postingId if already present
          const index = draft.indexOf(postingId);
          if (index !== -1) {
            draft.splice(index, 1);
          }
        }
      })
    );

    let result = await apiRoutes.markPostingFavourite({
      postingId,
      isFavourite,
    });
    console.log(result);
  }

  function filterPosting(posting: any) {
    const isFavourite = favouriteIds.includes(posting["_id"]);
    return Boolean(
      posting["isActive"] && (activeTab === "two" ? isFavourite : true)
    );
  }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center gap-x-2 py-3">
          <Spinner color="green" />
          <span>{t("loading")}</span>
        </div>
      ) : postingPages.length === 0 ? (
        <div className="flex items-center gap-x-2 py-3">
          <span>No saved data is here.</span>
        </div>
      ) : (
        <>
          {postingPages.map(({ data: postings }) =>
            postings.map(
              (posting) =>
                filterPosting(posting) && (
                  <PostingCard
                    // TODO: currently an awkward hack since
                    //    the application status is only calculated
                    //    internally in PostingCard itself
                    shouldBeVisible={(applied) => {
                      return activeTab === "three" ? applied : true;
                    }}
                    key={posting._id}
                    posting={posting}
                    isFavourite={favouriteIds.includes(posting["_id"])}
                    setIsFavourite={(isFavourite) =>
                      markFavourite(posting, isFavourite)
                    }
                  />
                )
            )
          )}
          {postingsQuery.isFetchingNextPage || postingsQuery.hasNextPage ? (
            <div className="col-span-2 flex justify-center">
              <Button
                variant="outlined"
                loading={postingsQuery.isFetchingNextPage}
                className="mt-8 mb-4"
                fullRounded
                onClick={() => postingsQuery.fetchNextPage()}
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
