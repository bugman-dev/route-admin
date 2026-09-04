/**
 * Formats a date in the Asia/Kolkata (IST) timezone for service-date display.
 *
 * @param date - A JavaScript `Date`, an ISO date/datetime string (`YYYY-MM-DD` or full ISO),
 *   or `null`/`undefined`. Defaults to the current date/time when omitted.
 * @returns A string in the format `DD Mon YYYY, Ddd` (en-GB parts in IST),
 *   or an empty string when the value cannot be parsed into a valid date.
 * @example
 * // Input:  new Date("2026-08-25T10:00:00+05:30")
 * // Output: "25 Aug 2026, Tue"
 * @example
 * // Input:  "2026-08-25"
 * // Output: "25 Aug 2026, Tue"
 */
export function formatServiceDateIst(date: Date | string | null | undefined = new Date()): string {
  const parsed = date instanceof Date ? date : date ? new Date(date) : null;

  if (!parsed || Number.isNaN(parsed.getTime())) {
    return "";
  }

  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    weekday: "short",
  }).formatToParts(parsed);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${get("day")} ${get("month")} ${get("year")}, ${get("weekday")}`;
}
