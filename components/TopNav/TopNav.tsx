import "react-modern-drawer/dist/index.css";

import Logo from "./assets/logo-big.png";
import MessageIcon from "./assets/message.svg";
// import ProfileImage from "~/app/assets/profile-1.webp";
import {
  IconSettings,
  IconMoon,
  IconBell,
  IconLock,
  IconHelp,
  IconCreditCard,
  IconKey,
  IconUser,
  IconLogout
} from "@tabler/icons-react";

import { US } from "country-flag-icons/react/3x2";

import Drawer from "react-modern-drawer";
import Image from "next/image";

import { IconButton } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import clsx from "clsx";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Button } from "../Button/Button";

import { atom, useAtom, useSetAtom } from "jotai";
import { AllLinks } from "../AllLinks";

import { languageDrawerAtom } from "../AppLayout/LanguageDrawer";
import { currencyDrawerAtom } from "../AppLayout/CurrencyDrawer";
import { useAuthState } from "~/app/providers/auth-state";
import { usePathname, useRouter } from "next/navigation";
import { NotificationsBox } from "./NotificationsBox";
import { ComponentProps, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

export interface TopNavProps {
  pageTitle?: string;
}

function capitalize(str: string | undefined) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}
function AppLink(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <Link
      {...props}
      href={`/${locale}${props.href}`} // Correct locale-based URL
      className={clsx(pathname === props.href && "text-teal")}
    />
  );
}

const drawerAtom = atom(false);

function Contents({ pageTitle }: TopNavProps) {
  const router = useRouter();
  const setDrawerOpen = useSetAtom(drawerAtom);
  const setLanguageDrawerOpen = useSetAtom(languageDrawerAtom);
  const setCurrencyDrawerOpen = useSetAtom(currencyDrawerAtom);

  const { userRole, user, logout } = useAuthState();

  const t = useTranslations('topNav');
  const tSettings = useTranslations('settings');
  const tnav = useTranslations("navigation");

  const locale = useLocale();

  let loggedIn = true;
  return (
    <>
      <div className="flex justify-between items-center">
        <Link href="home" locale={locale}>
          <Image alt="" src={Logo} className="h-7 w-auto lg:h-10" />
        </Link>
        <div className="flex gap-x-1 items-center">
          {loggedIn ? (
            <>
              <Link href="chat" locale={locale}>
                <IconButton variant="text">
                  <MessageIcon className="w-5" />
                </IconButton>
              </Link>
              <Menu placement="bottom-end">
  <MenuHandler>
    <button>
      <IconSettings className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors" />
    </button>
  </MenuHandler>
  <MenuList className="min-w-[240px]">
    {/* General Settings */}
    <MenuItem className="flex items-center gap-2">
      <IconMoon className="w-4 h-4" />
      {tSettings('display.title')}
    </MenuItem>
    <MenuItem className="flex items-center gap-2">
      <IconBell className="w-4 h-4" />
      {tSettings('notifications.title')}
    </MenuItem>

    {/* Privacy and Security */}
    <hr className="my-2" />
    <MenuItem className="flex items-center gap-2">
      <IconLock className="w-4 h-4" />
      {tSettings('privacy.title')}
    </MenuItem>
    <MenuItem className="flex items-center gap-2">
      <IconKey className="w-4 h-4" />
      {tSettings('twoFactor.title')}
    </MenuItem>

    {/* Help & Support */}
    <hr className="my-2" />
    <MenuItem className="flex items-center gap-2">
      <IconHelp className="w-4 h-4" />
      {tSettings('help.title')}
    </MenuItem>

    {/* Account Settings */}
    <hr className="my-2" />
    <MenuItem className="flex items-center gap-2">
      <IconUser className="w-4 h-4" />
      {tSettings('account.title')}
    </MenuItem>
    <MenuItem className="flex items-center gap-2">
      <IconCreditCard className="w-4 h-4" />
      {tSettings('payment.title')}
    </MenuItem>

    {/* Logout */}
    <hr className="my-2" />
    <MenuItem
      className="flex items-center gap-2 text-red-500"
      onClick={() => {
        logout();
        router.push(`/${locale}/login`);
      }}
    >
      <IconLogout className="w-4 h-4" />
      {tSettings('logout')}
    </MenuItem>
  </MenuList>
</Menu>
              <NotificationsBox />

              <Menu>
                <MenuHandler>
                  <button>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/profile_empty_gradient.png"
                      alt=""
                      className="w-8 h-8 rounded-full ml-2.5"
                    />
                  </button>
                </MenuHandler>
                <MenuList>
                  <div className="px-4 pt-2 pb-4 text-center space-y-2">
                    <h1 className="text-lg text-black">{user?.fullName}</h1>
                    <h2 className="text-sm text-gray-line-3/80 font-bold">
                      {capitalize(userRole)}
                    </h2>
                  </div>
                  {/* ======= */}
                  <AppLink href={`/profile`}>
                    <MenuItem className="flex justify-between items-center">
                      {tnav("profile")}
                    </MenuItem>
                  </AppLink>
                  <MenuItem
                    onClick={() => setLanguageDrawerOpen(true)}
                    className="flex justify-between items-center"
                  >
                    {t("changeLanguage")}
                    <US title="United States" className="w-5" />
                  </MenuItem>
                  <MenuItem
                    onClick={() => setCurrencyDrawerOpen(true)}
                    className="flex justify-between items-center"
                  >
                    {t("changeCurrency")}
                    <span className="text-xs font-bold">EUR</span>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      const locale = localStorage.getItem("locale") || "en";
                      logout();
                      router.push("login");
                    }}
                  >
                    {t("logout")}
                  </MenuItem>
                  {/* ======= */}
                </MenuList>
              </Menu>

            </>
          ) : (
            <Link href="login" locale={locale} className="hidden ph:block">
              <Button className="!px-4 !py-1.5 text-sm">
                {t("registerLogin")}
              </Button>
            </Link>
          )}

          {/* ============ */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            className="wl:hidden block"
            variant="text"
          >
            <IconMenu2 className="w-20" />
          </IconButton>
        </div>
      </div>
      <div className="absolute left-1/2 h-full -translate-x-1/2 top-0 flex items-center">
        <div
          className={clsx(
            "font-medium gap-x-4 wl:gap-x-7 xl:gap-x-9 whitespace-nowrap",
            "hover:[&>a]:underline",
            "wl:flex hidden"
          )}
        >
          <AllLinks />
        </div>
        <h1 className="text-2xl font-semibold wl:hidden max-ph:hidden block">
          {pageTitle}
        </h1>
      </div>

      <div className="absolute top-0 left-0">
        <MobileDrawer loggedIn={loggedIn} />
      </div>
    </>
  );
}

export function MobileDrawer({ loggedIn }: { loggedIn: boolean }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useAtom(drawerAtom);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  const t = useTranslations("topNav");
  const locale = useLocale();

  return (
    <Drawer
      open={isOpen}
      onClose={() => setIsOpen(false)}
      direction="right"
      overlayOpacity={0.7}
      duration={250}
      lockBackgroundScroll
      className="!w-[300px] max-w-[85vw] bg-white shadow-xl"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Image
            alt="Logo"
            src={Logo}
            className="h-8 w-auto transition-transform hover:scale-105"
          />
          <IconButton
            onClick={() => setIsOpen(false)}
            variant="text"
            className="hover:bg-gray-100 rounded-full p-2 transition-colors"
          >
            <IconX className="w-5 h-5 text-gray-600" />
          </IconButton>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col space-y-4">
            <AllLinks />
          </div>
        </div>

        {/* Footer */}
        {!loggedIn && (
          <div className="p-4 border-t border-gray-200">
            <Link href="auth" locale={locale} className="block">
              <Button
                className="w-full py-2.5 px-4 text-center font-medium
                          transition-all duration-200 hover:opacity-90"
              >
                {t('registerLogin')}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Drawer>
  );
}

export function TopNav(props: TopNavProps) {
  return (
    <nav className="bg-teal/5 border-b border-b-gray-line-2/30">
      <div className="app-container py-4 relative">
        <Contents {...props} />
      </div>
    </nav>
  );
}
