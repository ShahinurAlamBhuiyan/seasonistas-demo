"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function FrequentlyAskedQuestions({
  faqs = [],
}: {
  faqs?: { q: string; a: string }[];
}) {
  const [open, setOpen] = React.useState(-1);

  const handleOpen = (value: any) => setOpen(open === value ? -1 : value);

  return (
    <div className="[&_*]:!font-['urbanist']">
      {faqs.map(({ q, a }, index) => (
        <Accordion key={index} open={open === index}>
          <AccordionHeader
            onClick={() => handleOpen(index)}
            className="!text-teal-dark"
          >
            {q}
          </AccordionHeader>
          <AccordionBody>{a}</AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
