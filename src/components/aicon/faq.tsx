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
    a: "AICON'26 is a student technology and innovation event bringing technology, creativity, innovation and community together in one experience.",
  },
  {
    q: "Who can participate?",
    a: "AICON'26 is built for students and anyone curious about technology and creativity — builders, designers, problem solvers and organisers alike.",
  },
  {
    q: "What events are part of AICON'26?",
    a: "The programme spans four tracks: Tech, Creative, Compete and Connect. Specific sessions within each track will be announced.",
  },
  {
    q: "How can I register?",
    a: "Use the Register action on this page. Registration details will be shared through the official AICON'26 channels.",
  },
  {
    q: "Where will AICON'26 take place?",
    a: "The venue will be announced by the organising team. Details will appear here once confirmed.",
  },
  {
    q: "Will there be workshops and competitions?",
    a: "Yes. Workshops and competitions are part of the planned programme; the exact line-up will be published closer to the event.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-[var(--ink)] py-24 text-[var(--bone)] sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel className="text-[var(--bone)]">05 / FAQ</SectionLabel>
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
                  className="border-b border-[color-mix(in_oklab,var(--bone)_18%,transparent)]"
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
                  <AccordionContent className="pb-6 pl-7 text-sm leading-relaxed text-[var(--bone)]/70">
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
