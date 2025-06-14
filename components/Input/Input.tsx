import type {
  DivProps as HtmlDivProps,
  InputProps as HtmlInputProps,
  TextAreaProps as HtmlTextAreaProps,
} from "react-html-props";
import { combineVisualProps } from "../VisualComponent";
import { forwardRef, ReactNode } from "react";

export type InputProps = HtmlInputProps;

export const Input = forwardRef<HTMLInputElement, HtmlInputProps>(
  ({ ...rest }, ref) => {
    return (
      <input
        ref={ref}
        size={1}
        {...combineVisualProps(rest, {
          className: [
            "outline-none p-2.5 rounded-lg",
            "required:invalid:[[data-submitted=true]_&]:outline-red-600",
          ],
        })}
      />
    );
  }
);
Input.displayName = "Input";

export const TextArea = forwardRef<HTMLTextAreaElement, HtmlTextAreaProps>(
  ({ ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        {...combineVisualProps(rest, {
          className: [
            "outline-none p-2.5 rounded-lg",
            "required:invalid:[[data-submitted=true]_&]:outline-red-600",
          ],
        })}
      />
    );
  }
);
TextArea.displayName = "TextArea";

// eslint-disable-next-line react/display-name
export const RichInput = forwardRef(
  (
    {
      icon,
      inputProps = {},
      ...divProps
    }: { icon?: ReactNode; inputProps?: HtmlInputProps } & Omit<
      HtmlDivProps,
      "children"
    >,
    ref
  ) => {
    return (
      <div
        {...combineVisualProps(divProps, {
          className:
            "border border-black/20 rounded-xl flex-1 flex overflow-hidden px-2.5 py-2 gap-x-1.5 items-center",
          // "outline-none p-2.5 rounded-lg",
          // "required:invalid:[[data-submitted=true]_&]:outline-red-600",
        })}
      >
        {icon}
        <input
          ref={ref as any}
          size={1}
          {...combineVisualProps(inputProps, {
            className: "flex-1 outline-none self-stretch",
          })}
        />
      </div>
    );
  }
);
