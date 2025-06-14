"use client";

import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { Button } from "~/components/Button/Button";
import { apiConn } from "~/app/api-routes";

export default function PlayPage() {
  const { register, getValues } = useForm();

  if (typeof window !== "undefined") {
    // @ts-ignore
    window.getValues = getValues;
    // @ts-ignore
    window.temp = apiConn;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const fileList: FileList = getValues().logo;
    const file = fileList[0];
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.file = file;
    }
    console.log(file);
  }

  return (
    <>
      <div className="p-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 items-start"
        >
          <input {...register("logo")} type="file" />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
}
