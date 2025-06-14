import type {
  DivProps as HtmlDivProps,
  SelectProps as HtmlSelectProps
} from "react-html-props";
import { combineVisualProps } from "../VisualComponent";
import { IconChevronDown } from "@tabler/icons-react";

export type SelectProps = Omit<HtmlDivProps, "value" | "onChange"> &
  Pick<HtmlSelectProps, "value" | "onChange"> & {
    selectClassName?: string | undefined;
    selectProps?: Omit<HtmlSelectProps, "value"> | undefined;
    variant?: "light" | "outlined";
    icon?: any;
  };

export function Select({
  children,
  value,
  variant = "outlined",
  icon,
  onChange,
  selectClassName,
  selectProps,
  ...divProps
}: SelectProps) {
  return (
    <div
      {...combineVisualProps(divProps, {
        className: [
          "rounded-xl flex p-3 justify-between gap-x-5",
          "items-center",
          variant === "outlined" ? "border border-gray-300" : "bg-white"
        ]
      })}
    >
      {icon}
      <select
        {...combineVisualProps(selectProps || {}, {
          className: [
            "appearance-none bg-transparent flex-1 self-stretch border-none outline-none",
            selectClassName
          ],
        })}
        value={value}
        onChange={(e) => {
          onChange?.(e);
          selectProps?.onChange?.(e);
        }}
      >
        {children}
      </select>
      <IconChevronDown size={17} className='self-center' />
    </div>
  );
}
