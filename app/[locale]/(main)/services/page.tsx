"use client";

import { AppLayout } from "~/components/AppLayout/AppLayout";

import React from "react";
import { TitleMark } from "~/components/decorations";
import { PriceListCells } from "./PriceListCells";

export default function ServicesPage() {
  return (
    <AppLayout>
      <div className="pb-40 pt-8">
        <div className="app-container max-w-5xl w-full mb-12">
          {/* Title */}
          <h1 className="text-4xl text-center">
            <span className="font-bold text-teal mr-1 relative bg-bdlue-600">
              Services
              <TitleMark className="absolute w-32 top-full -left-5 -translate-y-2.5" />
            </span>
            {/* <span className="font-normal"> we are</span> */}
          </h1>

          {/* Subtitle */}
          <p className="text-center text-xl font-normal text-black/50 mt-6 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tristique mauris rhoncus odio aliquet, vitae.
          </p>

          <PriceListCells />
        </div>
      </div>
    </AppLayout>
  );
}
