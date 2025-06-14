import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./config";


export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix, // Use the same localePrefix from config.ts
});

export const config = {
  matcher: ["/", "/(el|en)/:path*"],
};
