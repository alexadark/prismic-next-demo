import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export const WithBgHero = ({ slice }) => {
  return (
    <section className="relative py-60">
      <PrismicNextImage
        field={slice.primary.image}
        layout="fill"
        objectFit="cover"
      />
      <div className="container absolute inset-0 z-10 flex flex-col justify-center mx-auto text-center text-white">
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
