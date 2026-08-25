import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";
import { SectionLabel } from "./brand";

const FAQS = [
  {
    q: "What is AICON'26?",
    a: "AICON'26 is a three-day AI and technology experience at SEECS, NUST. It brings together coding, AI, startups and innovation through four distinct modules — Pitchfest, Competitive Speed Programming, AI RapidSprint and the Sponsor Innovation Challenge.",
  },
  {
    q: "Who can participate?",
    a: "AICON'26 is built for students — coders, designers, builders, problem-solvers and anyone curious about AI and technology. Whether you want to pitch a startup idea, compete in programming, build an AI model or solve an industry challenge, there is a module for you.",
  },
  {
    q: "What are the four modules?",
    a: "The four modules are Pitchfest (startup pitching), Competitive Speed Programming (ranked coding), AI RapidSprint (rapid AI prototyping) and the Sponsor Innovation Challenge (industry-driven problem solving). Each module offers a different way to demonstrate your skills.",
  },
  {
    q: "What is Pitchfest?",
    a: "Pitchfest gives you 90 seconds to pitch one idea to a live panel. It tests your ability to communicate a concept clearly and persuasively under pressure — the panel decides in the room.",
  },
  {
    q: "What is AI RapidSprint?",
    a: "AI RapidSprint challenges teams to build a working AI model in one sitting. You prototype, ship, demo and defend your solution — no slideware, just working technology.",
  },
  {
    q: "What is Competitive Speed Programming?",
    a: "Ranked rounds on the clock. Solve algorithmic problems under time pressure with a live leaderboard tracking performance. Clean, fast, competitive programming.",
  },
  {
    q: "What is the Sponsor Innovation Challenge?",
    a: "Real problem briefs from industry partners. Teams develop solutions and present to the people who own the problem — where student innovation meets the real world.",
  },
  {
    q: "How can I register?",
    a: "Use the registration section on this page to express your interest. Official registration details and confirmation will be shared through AICON'26 channels closer to the event.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-[var(--bone)] py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel>04 / FAQ</SectionLabel>
            <h2 className="text-balance-tight mt-6 font-display text-[clamp(2.4rem,7vw,5rem)] font-bold uppercase">
              Questions?
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${i}`}
                  className="border-b border-[color-mix(in_oklab,var(--ink)_14%,transparent)]"
                >
                  <AccordionTrigger className="group py-6 text-left font-display text-lg font-bold tracking-tight uppercase hover:no-underline sm:text-xl">
                    <span className="flex items-center gap-4">
                      <span
                        aria-hidden
                        className="h-2.5 w-2.5 -skew-x-[28deg] bg-[var(--signal)] transition-transform duration-300 group-hover:scale-125"
                      />
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-7 text-sm leading-relaxed text-[var(--ink)]/70">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
