import { format } from "date-fns";

export const isDev = !!process && process.env.NODE_ENV === "development";

export function renderExpDurationString(exp) {
  let { startDate, endDate, currentlyActive } = exp;

  const displayFormat = "MMM yyyy";

  const startStr = format(new Date(startDate), displayFormat);
  const endStr =
    !currentlyActive && endDate
      ? format(new Date(endDate), displayFormat)
      : "Present";

  return `${startStr} - ${endStr}`;
}