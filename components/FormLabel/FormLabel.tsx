import { IconAsterisk, IconAsteriskSimple } from "@tabler/icons-react";
import { LabelProps as HtmlLabelProps } from "react-html-props";
import { combineVisualProps } from "~/components/VisualComponent";

export function FormLabel({
  label,
  children,
  showAsterik,
  inline,
  ...rest
}: {
  label: string;
  showAsterik?: boolean;
  inline?: boolean;
} & HtmlLabelProps) {
  return (
    <label
      {...combineVisualProps(rest, {
        className: [
          "flex gap-y-1.5 gap-x-2", //
          inline ? "flex-row" : "flex-col",
        ],
      })}
    >
      {label && (
        <span className="flex items-center gap-x-1">
          {label}
          {showAsterik && <IconAsterisk stroke={3} color="red" size={13} />}
        </span>
      )}
      {children}
    </label>
  );
}
