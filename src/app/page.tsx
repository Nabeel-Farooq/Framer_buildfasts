"use client";

import Hero from "@components/Hero";
import ProblemsComponents from "@components/Problems";
import FeaturesListicle from "@components/FeaturesListicle";
import About from "@components/About";
import Pricing from "@components/Pricing";
import FAQ from "@components/FAQ";
import CTA from "@components/CTA";
import Testimonials11 from "@components/TestinomialGrid";
import MarqueeFeaturedIn from "@components/featuredIn/marqeeLogos";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* <HeroCenter /> */}
      {/* <FeaturedIn /> */}

      <MarqueeFeaturedIn speed={15} />

      <ProblemsComponents />
      <FeaturesListicle />

      {/* <FeaturesCarousel /> */}

      <About />
      <Pricing />
      <Testimonials11 />
      <FAQ />
      <CTA />
    </main>
  );
}
