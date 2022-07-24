import React from "react";
import { PrismicRichText } from "@prismicio/react";

export const DefaultFeatures = ({ slice }) => {
  return (
    <section className="py-20">
      <div className="intro mx-auto max-w-[900px] text-center">
        <PrismicRichText field={slice.primary.title} />
        <div className="text-xl">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
      <div className="container flex gap-10 mx-auto mt-20">
        {slice?.items?.map((item, i) => {
          return (
            <div className="flex-1 feature" key={i}>
              <div className="mb-3 text-xl font-bold feature-title">
                <PrismicRichText field={item.title} />
              </div>
              <div className="feature-text">
                <PrismicRichText field={item.description} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
