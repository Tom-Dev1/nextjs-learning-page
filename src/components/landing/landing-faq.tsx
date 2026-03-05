"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function LandingFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          id="faq-title"
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Câu hỏi thường gặp
        </motion.h2>

        <Accordion
          type="single"
          defaultValue="faq-0"
          className="mt-12 space-y-2"
        >
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger value={`faq-${i}`}>{item.q}</AccordionTrigger>
              <AccordionContent value={`faq-${i}`}>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
