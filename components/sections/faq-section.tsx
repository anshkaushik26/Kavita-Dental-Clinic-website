import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { FAQ_ITEMS } from "@/lib/constants";

/**
 * FaqSection — Section 7
 *
 * Accessible accordion using shadcn/Base UI accordion.
 * Single-column constrained width for optimal reading line length.
 * openMultiple={false} ensures only one item is open at a time.
 *
 * Exactly 7 questions per product specification.
 */
export function FaqSection() {
  return (
    <section
      id="faqs"
      className="section-padding bg-background"
      aria-labelledby="faq-heading"
    >
      <div className="container-padded">

        {/* Heading */}
        <AnimatedWrapper>
          <SectionHeading
            label="FAQs"
            heading="Frequently Asked Questions"
            subheading="Everything you need to know before your visit."
            id="faq-heading"
          />
        </AnimatedWrapper>

        {/* Accordion — Base UI API: no type/collapsible props */}
        <AnimatedWrapper delay={0.1} className="mt-14 max-w-2xl mx-auto">
          <Accordion multiple={false} className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-border/70 rounded-xl px-6 bg-white open:border-primary/25 transition-colors duration-200"
              >
                <AccordionTrigger
                  className="text-left text-[15px] font-semibold text-foreground hover:text-primary hover:no-underline py-5 transition-colors duration-150"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 pt-0">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedWrapper>

      </div>
    </section>
  );
}
