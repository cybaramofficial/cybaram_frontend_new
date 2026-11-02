import React, { useState } from 'react';
import { FaqItem } from '../types.ts';
import { Plus, Minus } from 'lucide-react';

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
  kicker?: string;
  contactPrompt?: {
    text: string;
    actionText: string;
    onAction: () => void;
  };
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  title = 'Frequently asked questions',
  subtitle = 'Honest answers, without the jargon.',
  kicker = 'A LITTLE MORE CLARITY',
  contactPrompt
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-y border-[#E8EEEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Header column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              {kicker}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#172B4D]">
              {title}
            </h2>
            <p className="text-base text-[#53615C] leading-relaxed">
              {subtitle}
            </p>

            {contactPrompt && (
              <div className="pt-4">
                <button
                  type="button"
                  onClick={contactPrompt.onAction}
                  className="text-sm font-semibold text-[#123C35] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{contactPrompt.actionText}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </div>

          {/* Accordion items column */}
          <div className="lg:col-span-7 divide-y divide-[#E8EEEA]">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between text-left gap-4 py-2 text-[#172B4D] hover:text-[#123C35] transition-colors focus:outline-hidden group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-semibold leading-snug">
                      {item.question}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#F6F8F6] border border-[#E8EEEA] flex items-center justify-center text-[#123C35] group-hover:bg-[#E8F5EE] transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-2 text-sm sm:text-base text-[#53615C] leading-relaxed animate-in fade-in duration-150">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
