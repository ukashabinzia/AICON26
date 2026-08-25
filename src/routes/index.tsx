import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/aicon/navbar";
import { Hero } from "@/components/aicon/hero";
import { About } from "@/components/aicon/about";
import { Events } from "@/components/aicon/events";
import { Personas } from "@/components/aicon/personas";
import { Schedule } from "@/components/aicon/schedule";
import { Experience } from "@/components/aicon/experience";
import { Faq } from "@/components/aicon/faq";
import { RegisterCta } from "@/components/aicon/register-cta";
import { Footer } from "@/components/aicon/footer";

const TITLE = "AICON'26 — The Signal Is Live";
const DESCRIPTION =
  "AICON'26 brings together technology, creativity, innovation and community in one immersive student event. Connect. Create. Converge.";

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
        <Events />
        <Personas />
        <Schedule />
        <Experience />
        <Faq />
        <RegisterCta />
      </main>
      <Footer />
    </>
  );
}
