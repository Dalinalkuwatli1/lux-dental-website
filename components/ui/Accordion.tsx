'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  icon?: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle, icon }) => {
  return (
    <motion.div 
      className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
        isOpen 
          ? 'bg-white/5 dark:bg-[#00f2fe]/5 border-primary/20 dark:border-[#00f2fe]/30 shadow-glass' 
          : 'bg-transparent border-neutral-200/50 dark:border-white/5 hover:border-primary/10 dark:hover:border-[#00f2fe]/10'
      }`}
      animate={{
        backgroundColor: isOpen ? 'rgba(13, 92, 86, 0.03)' : 'transparent',
      }}
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left p-5 focus:outline-none cursor-pointer group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-xl transition-colors duration-300 ${
            isOpen 
              ? 'bg-primary/10 dark:bg-[#00f2fe]/10 text-primary dark:text-[#00f2fe]' 
              : 'bg-neutral-100 dark:bg-white/5 text-neutral-400 group-hover:text-primary dark:group-hover:text-[#00f2fe]'
          }`}>
            {icon || <HelpCircle className="w-5 h-5" />}
          </div>
          <span className={`text-base font-semibold tracking-wide transition-colors duration-300 ${
            isOpen ? 'text-primary dark:text-[#00f2fe]' : 'text-charcoal dark:text-white/90 group-hover:text-primary dark:group-hover:text-[#00f2fe]'
          }`}>
            {title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ChevronDown 
            className={`w-5 h-5 transition-colors ${
              isOpen ? 'text-primary dark:text-[#00f2fe]' : 'text-neutral-400 group-hover:text-primary dark:group-hover:text-[#00f2fe]'
            }`} 
          />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 pb-6 pt-2 pl-16">
              <p className="text-[15px] text-neutral-600 dark:text-neutral-300/80 leading-relaxed font-light">
                {children}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface AccordionProps {
  items: { title: string; content: React.ReactNode; icon?: React.ReactNode }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full space-y-3">
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          title={item.title}
          icon={item.icon}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
