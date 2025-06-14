import clsx, { type ClassValue } from "clsx";
import type { CSSProperties } from "react";

export interface VisualProps {
  className?: string | undefined;
  style?: CSSProperties | undefined;
}

export interface CombineVisualPropsIn {
  className?: ClassValue | undefined;
  style?: CSSProperties | undefined;
}

export type NoClass<T> = Omit<T, 'className'>;
export type NoChildren<T> = Omit<T, 'children'>;

export function combineVisualProps<T extends VisualProps>(
  baseProps: T,
  props: CombineVisualPropsIn
): T {
  let { className: baseClassName, style: baseStyles } = baseProps;
  let { className: themeClassName, style: themeStyles } = props;

  return {
    ...baseProps,
    className: clsx(baseClassName, themeClassName),
    style: {
      ...baseStyles,
      ...themeStyles
    }
  };
}
