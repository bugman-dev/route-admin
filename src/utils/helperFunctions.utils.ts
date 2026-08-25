/**
 * Formats a date in the Asia/Kolkata (IST) timezone for service-date display.
 *
 * @param date - A JavaScript `Date` instance. Defaults to the current date/time.
 * @returns A string in the format `DD Mon YYYY, Ddd` (en-GB parts in IST).
 * @example
 * // Input:  new Date("2026-08-25T10:00:00+05:30")
 * // Output: "25 Aug 2026, Tue"
 */
export function formatServiceDateIst(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    weekday: "short",
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${get("day")} ${get("month")} ${get("year")}, ${get("weekday")}`;
}
