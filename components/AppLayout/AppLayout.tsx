import type { PropsWithChildren } from "react";

import { TopNav, TopNavProps } from "~/components/TopNav/TopNav";
import { Footer } from "~/components/Footer/Footer";
import { LanguageDrawer } from "./LanguageDrawer";
import { CurrencyDrawer } from "./CurrencyDrawer";

type AppLayoutProps = PropsWithChildren &
  TopNavProps;

export function AppLayout({ children, ...navProps }: AppLayoutProps) {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <TopNav {...navProps} />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </main>
      <div className="absolute top-0 left-0">
        <LanguageDrawer />
        <CurrencyDrawer />
      </div>
    </>
  );
}
