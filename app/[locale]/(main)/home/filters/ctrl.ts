import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { useDebounceCallback } from "usehooks-ts";

function toArray(obj: Record<string, boolean | undefined | null>): string[] {
  if (!obj) return [];
  return Object.keys(obj).filter((key) => Boolean(obj[key]));
}

function keyToArray(obj: any, key: string) {
  let arr = toArray(obj[key]);
  if (arr.length === 0) {
    delete obj[key];
  } else {
    obj[key] = arr;
  }
}

function removeFalsey(obj: any) {
  Object.keys(obj).forEach((key) => {
    if (!obj[key]) {
      delete obj[key];
    }
  });
}

if (typeof window !== "undefined") {
  // @ts-ignore
  window.toArray = toArray;
  // @ts-ignore
  window.keyToArray = keyToArray;
}

function prepareFilterQuery(values: any) {
  keyToArray(values, "jobType");
  keyToArray(values, "expLevelRequired");
  keyToArray(values, "datePosted");
  removeFalsey(values);
}

export function useFilterController(onFilter: (filters: any) => void) {
  const { register, watch } = useForm();

  const performFilter = useDebounceCallback(onFilter, 500);

  useEffect(() => {
    const { unsubscribe } = watch((values) => {
      prepareFilterQuery(values);
      performFilter(values);
    });
    return () => unsubscribe();
  }, [watch, performFilter]);

  return { register };
}

export type FilterController = ReturnType<typeof useFilterController>;
