// See https://github.com/creativetimofficial/material-tailwind/issues/651#issuecomment-1999724366 for more information

import {} from "@material-tailwind/react";

type EventCapture = {
  onPointerEnterCapture?: unknown;
  onPointerLeaveCapture?: unknown;
};

interface CorrectPlaceholder extends EventCapture {
  placeholder?: unknown;
}

interface CorrectCrossOrigin extends EventCapture {
  crossOrigin?: unknown;
}

declare module "@material-tailwind/react" {
  export interface InputProps extends CorrectCrossOrigin {}
  export interface SwitchProps extends CorrectCrossOrigin {}

  export interface ButtonProps extends CorrectPlaceholder {}
  export interface SelectProps extends CorrectPlaceholder {}
  export interface IconButtonProps extends CorrectPlaceholder {}
  export interface AvatarProps extends CorrectPlaceholder {}
  export interface DrawerProps extends CorrectPlaceholder {}
  export interface CardProps extends CorrectPlaceholder {}
  export interface ListProps extends CorrectPlaceholder {}
  export interface ListItemProps extends CorrectPlaceholder {}
  export interface ListItemPrefixProps extends CorrectPlaceholder {}
  export interface TypographyProps extends CorrectPlaceholder {}
  export interface AccordionHeaderProps extends CorrectPlaceholder {}
  export interface AccordionProps extends CorrectPlaceholder {}
  export interface ListItemSuffixProps extends CorrectPlaceholder {}
  export interface CardHeaderProps extends CorrectPlaceholder {}
  export interface CardBodyProps extends CorrectPlaceholder {}
  export interface CardFooterProps extends CorrectPlaceholder {}
  export interface MenuListProps extends CorrectPlaceholder {}
  export interface MenuItemProps extends CorrectPlaceholder {}
  export interface StepperProps extends CorrectPlaceholder {}
  export interface StepProps extends CorrectPlaceholder {}
  export interface TabsHeaderProps extends CorrectPlaceholder {}
  export interface TabsBodyProps extends CorrectPlaceholder {}
  export interface TabProps extends CorrectPlaceholder {}
  export interface TextareaProps extends CorrectPlaceholder {}
  export interface CheckboxProps extends CorrectPlaceholder, CorrectCrossOrigin {}
  export interface SpinnerProps extends CorrectPlaceholder, CorrectCrossOrigin {}
  export interface DialogProps extends CorrectPlaceholder, CorrectCrossOrigin {}
  export interface DialogHeaderProps extends CorrectPlaceholder, CorrectCrossOrigin {}
  export interface DialogBodyProps extends CorrectPlaceholder, CorrectCrossOrigin {}
  export interface RadioProps extends CorrectPlaceholder, CorrectCrossOrigin {}
  export interface PopoverContentProps extends CorrectPlaceholder, CorrectCrossOrigin {}
}
