import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";

import React from "react";
import {
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { atom, useAtom } from "jotai";
import { Select } from "~/components/Select/Select";

export const currencyDrawerAtom = atom(false);

export function CurrencyDrawer() {
  let [isOpen, setIsOpen] = useAtom(currencyDrawerAtom);
  const close = () => setIsOpen(false);

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={close}
        direction="left"
        overlayOpacity={0.6}
        duration={200}
        lockBackgroundScroll
        className="!w-[85vw] ph:!w-[300px] p-4"
      >
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography variant="h5" color="blue-gray">
            Change Currency
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col gap-6 p-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Select Your Currency
          </Typography>
          <Select>
            <option>EUR</option>
          </Select>
          <Button onClick={close}>Confirm</Button>
        </div>
      </Drawer>
    </>
  );
}
