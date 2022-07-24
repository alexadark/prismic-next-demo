import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";

export const DefaultHero = ({ slice }) => {
  return (
    <section className="bg-gradient-to-tl from-pink-500 via-cyan-600 to-purple-900 py-28">
      <div className="container mx-auto text-center text-white">
        <PrismicRichText field={slice.primary.headline} />

        <div className="mx-auto max-w-[750px] text-xl">
          <PrismicRichText field={slice.primary.content} />
        </div>
        <div className="buttons mx-auto mt-8 flex max-w-[750px] flex-wrap items-center justify-center gap-3">
          {slice?.items?.map((item, i) => (
            <div className="btn" key={i}>
              <PrismicLink field={item.buttonLink}>
                {item.buttonText}
              </PrismicLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
