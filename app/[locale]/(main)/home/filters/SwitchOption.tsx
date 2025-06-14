import { Switch } from "@material-tailwind/react";
import { forwardRef } from "react";
import { InputProps as HtmlInputProps } from "react-html-props";

export type SwitchOptionProps = {
  label: string;
} & Omit<HtmlInputProps, "color">;

export const SwitchOption = forwardRef(
  ({ label, ...rest }: SwitchOptionProps, ref) => {
    return (
      <label className="flex items-center gap-x-4 cursor-pointer">
        <Switch
          {...rest}
          ref={ref as any}
          ripple
          className="h-full w-full checked:bg-teal shrink-0"
          containerProps={{ className: "w-11 h-6" }}
          circleProps={{ className: "before:hidden left-0.5 border-none" }}
        />
        <span className="">{label}</span>
      </label>
    );
  }
);
