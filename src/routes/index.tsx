import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/aicon/navbar";
import { Hero } from "@/components/aicon/hero";
import { About } from "@/components/aicon/about";
import { WhyAicon } from "@/components/aicon/why-aicon";
import { Modules } from "@/components/aicon/events";
import { StatsAndCommunity } from "@/components/aicon/personas";
import { Experience } from "@/components/aicon/experience";
import { Faq } from "@/components/aicon/faq";
import { RegisterCta } from "@/components/aicon/register-cta";
import { Footer } from "@/components/aicon/footer";

const TITLE = "AICON'26 — Build What's Next";
const DESCRIPTION =
  "AICON'26 is a three-day AI and technology experience at SEECS, NUST. Coding, AI, startups, innovation — four modules, one community.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyAicon />
        <StatsAndCommunity />
        <Modules />
        <Experience />
        <Faq />
        <RegisterCta />
      </main>
      <Footer />
    </>
  );
}
