import IconFacebook from "./assets/facebook.svg";
import IconTwitter from "./assets/twitter.svg";
import IconInstagram from "./assets/instagram.svg";

import clsx from "clsx";
import { FooterProps as HtmlFooterProps } from "react-html-props";
import { combineVisualProps } from "../VisualComponent";
import { AllLinks } from "../AllLinks";
import { Button } from "@material-tailwind/react";
import { languageDrawerAtom } from "../AppLayout/LanguageDrawer";
import { useSetAtom } from "jotai";
import { useViewMode } from "~/app/providers/auth-state";

function SocialIcon({
  imageSrc: Icon,
  href,
}: {
  imageSrc: any;
  href?: string;
}) {
  return (
    <a
      href={href ?? "#"}
      className="p-1.5 tc rounded-lg hover:bg-black/20 active:bg-black/40"
    >
      <Icon className="w-6" />
    </a>
  );
}

export type FooterProps = HtmlFooterProps;

export function Footer(props: FooterProps) {
  const setLanguageDrawerAtom = useSetAtom(languageDrawerAtom);
  const viewMode = useViewMode();

  return (
    <footer
      {...combineVisualProps(props, {
        className: [
          "bg-x-purple py-10 flex flex-col justify-center px-4 ph:items-center text-white",
          "max-w-screen overflow-x-auto",
          "relative",
        ],
      })}
    >
      <div
        className={clsx(
          "hover:[&>a]:underline",
          "text-lg font-medium whitespace-nowrap",
          "grid",
          "grid-cols-1 ph:grid-cols-2 gap-x-6 gap-y-6",
          "justify-items-center sm:justify-items-center sm:gap-x-10",
          viewMode === "employer"
            ? "sm:grid-cols-[repeat(4,auto)] md:grid-cols-[repeat(8,auto)]"
            : "sm:grid-cols-[repeat(6,auto)]"
        )}
      >
        <AllLinks />
      </div>
      <div className="grid grid-cols-3 mt-8 justify-items-center">
        <SocialIcon imageSrc={IconFacebook} />
        <SocialIcon imageSrc={IconTwitter} />
        <SocialIcon imageSrc={IconInstagram} />
      </div>

      <h3 className="mt-7 font-medium text-white opacity-75 text-center">
        Seasonistas
      </h3>

      <div className="absolute right-0 bottom-0">
        <div className="px-2 py-4">
          <Button
            onClick={() => setLanguageDrawerAtom(true)}
            size="lg"
            color="white"
            variant="text"
            className="flex items-center gap-2 !px-4 !py-4"
          >
            Choose language
          </Button>
        </div>
      </div>
    </footer>
  );
}
