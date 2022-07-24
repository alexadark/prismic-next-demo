import React from "react";
import { DefaultHero, WithBgHero } from "../../components/Hero";

const Hero = ({ slice }) => {
  const { variation } = slice;

  if (variation === "bgImage") {
    return <WithBgHero slice={slice} />;
  } else {
    return <DefaultHero slice={slice} />;
  }
};

export default Hero;
