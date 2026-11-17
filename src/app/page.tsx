import Hero from "@/components/sections/Hero";
import Proof from "@/components/sections/Proof";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Audience from "@/components/sections/Audience";
import Platform from "@/components/sections/Platform";
import Difference from "@/components/sections/Difference";
import Academy from "@/components/sections/Academy";
import Trust from "@/components/sections/Trust";
import Pricing from "@/components/sections/Pricing";
import Story from "@/components/sections/Story";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import { organizationJsonLd, faqJsonLd } from "@/lib/jsonld";
export default function HomePage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <Hero/><Proof/><Problem/><HowItWorks/><Audience/><Platform/><Difference/><Academy/><Trust/><Pricing/><Story/><Faq/><FinalCta/>
  </>;
}
