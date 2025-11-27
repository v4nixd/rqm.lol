"use client";

import { useState } from "react";
import { LinkItem } from "../../types/types";
import { NavLink } from "./Header";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function MobileMenuToggle({ links }: { links: LinkItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-content-base-secondary"
      >
        <MobileButton isOpen={isOpen} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 40,
            }}
            className="absolute w-full -z-10 top-14 left-0 right-0 bg-background-base-secondary rounded-b-xl p-4 text-2xl flex flex-col space-y-2"
          >
            {links.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileButton({ isOpen }: { isOpen: boolean }) {
  return isOpen ? (
    <X className="size-8" strokeWidth={2} />
  ) : (
    <Menu className="size-8" strokeWidth={2} />
  );
}
