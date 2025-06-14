import { Input, IconButton } from "@material-tailwind/react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { ComponentProps, forwardRef, useState } from "react";
import { getAuthState } from "../../providers/auth-state";
import Link from "next/link";

if (typeof window !== "undefined") {
  (window as any).getAuthState = getAuthState;
}

export const AuthInput = forwardRef(
  (props: ComponentProps<typeof Input>, ref: any) => (
    <Input ref={ref} {...props} color="blue-gray" className="!text-black" />
  )
);

export const PasswordInput = forwardRef(
  (props: ComponentProps<typeof Input>, ref) => {
    const [see, setSee] = useState(false);

    let Icon = see ? IconEyeClosed : IconEye;

    return (
      <AuthInput
        ref={ref}
        {...props}
        type={see ? "text" : "password"}
        icon={
          <IconButton
            tabIndex={-1}
            onClick={() => setSee((prev) => !prev)}
            variant="text"
            size="sm"
            className="relative -top-1.5 right-1.5 !text-black/60"
          >
            <Icon size={20} stroke={1} />
          </IconButton>
        }
      />
    );
  }
);

export function Note({
  label,
  linkLabel,
  linkHref,
}: {
  label: string;
  linkLabel: string;
  linkHref: string;
}) {
  return (
    <p className="mt-4 text-center text-black/60 font-medium">
      {label}{" "}
      <Link href={linkHref} className="text-teal underline hover:text-teal-dark tc">
        {linkLabel}
      </Link>
    </p>
  );
}
