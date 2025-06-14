"use client";

import { useState } from "react";
import { AppLayout } from "~/components/AppLayout/AppLayout";
import { Button } from "~/components/Button/Button";
import clsx from "clsx";
import {
  IconBrandInstagram,
  IconMailFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import { FormLabel } from "~/components/FormLabel/FormLabel";
import { combineVisualProps } from "~/components/VisualComponent";
import { useTranslations } from "next-intl";
import { apiRoutes } from "~/app/api-routes";
import toast from "react-hot-toast";

function ContactInfoBlock({ Icon, title }: { Icon: any; title: string }) {
  // Determine the appropriate link
  const isEmail = title.indexOf("@") < 0;
  const isPhone = /^\+?[0-9\s\-()]+$/.test(title);
  const isInstagram = title.startsWith("@");

  let href: string | undefined;
  if (isEmail && !isPhone) {
    href = `mailto:${title}`;
  } else if (isPhone) {
    href = `tel:${title}`;
  } else if (isInstagram) {
    href = `https://www.instagram.com/${title.slice(1)}`; // Remove '@' for URL
  }

  return (
    <div className="flex flex-col items-center max-w-sm">
      <div
        className={clsx(
          "border-black/20 border w-14 h-14 flex items-center justify-center",
          "rounded-full"
        )}
      >
        <Icon size={27} className="text-teal" />
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md text-black/50 mt-4 font-semibold hover:text-teal transition-colors"
        >
          {title}
        </a>
      ) : (
        <h2 className="text-md text-black/50 mt-4 font-semibold">{title}</h2>
      )}
    </div>
  );
}

function TopSection() {
  const t = useTranslations("contact");

  return (
    <>
      <h1 className="text-4xl text-center">
        <span className="font-bold text-teal mr-1 relative bg-bdlue-600">
          {t("send")}
        </span>
      </h1>
      <p className="text-center text-xl font-normal text-black/50 mt-6 max-w-xl mx-auto">
        {t("askUs")}
      </p>
      <div className="flex justify-center gap-x-10 sm:gap-x-20 gap-y-12 mt-12">
        <ContactInfoBlock Icon={IconBrandInstagram} title="@Seasonistas" />
        <ContactInfoBlock Icon={IconMailFilled} title="Seasonistas" />
        <ContactInfoBlock Icon={IconPhoneFilled} title="+92 311 9293 45" />
      </div>
    </>
  );
}

const ContactInput = ({
  hasError,
  ...props
}: { hasError: boolean } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...combineVisualProps(props, {
      className: clsx(
        "px-2 py-2 rounded outline-none border border-gray-line-3",
        hasError && "border-red-500"
      ),
    })}
  />
);

function FormSection() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await apiRoutes.contactUs(formData);
        toast.success("Email sent");
      } catch (error) {
        console.log(error);

        toast.error("Failed to send email");
      }
    }
  };

  return (
    <section className="mt-16">
      <form onSubmit={handleSubmit}>
        <div className="flex max-md:flex-col gap-y-12 gap-x-12">
          <FormLabel className="flex-1" label={t("yourName")}>
            <ContactInput
              hasError={errors.name}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              placeholder={t("enterYourName")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{t("requiredField")}</p>
            )}
          </FormLabel>
          <FormLabel className="flex-1" label={t("emailAddress")}>
            <ContactInput
              hasError={errors.email}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              placeholder={t("enterYourEmailAddress")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{t("requiredField")}</p>
            )}
          </FormLabel>
        </div>
        <FormLabel label={t("yourMessage")} className="mt-8">
          <ContactInput
            hasError={errors.message}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            placeholder={t("enterYourMessage")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{t("requiredField")}</p>
          )}
        </FormLabel>

        <Button type="submit" className="mx-auto mt-16" fullRounded>
          {t("submit")}
        </Button>
      </form>
    </section>
  );
}

export function ContactUsForm() {
  return (
    <div className="app-container w-full pt-14 pb-20">
      <TopSection />
      <FormSection />
    </div>
  );
}
