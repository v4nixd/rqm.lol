"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenuToggle from "./MobileLayoutToggle";
import { LinkItem } from "@/app/types/types";

interface HeaderProps {
  actions?: React.ReactNode;
  className?: string;
}

const NAVIGATION_LINKS = [
  { label: "Главная", href: "/" },
  { label: "Контакты", href: "/contact" },
];

export default function Header({ actions, className }: HeaderProps) {
  const links: LinkItem[] = NAVIGATION_LINKS;

  return (
    <header
      className={`mx-auto md:mt-4 md:rounded-2xl md:w-fit h-[56px] flex items-center justify-between md:p-2 p-4 top-0 z-50 bg-background-base-secondary ${
        className || ""
      }`}
    >
      <Link href="/" className="md:ml-2 mr-4">
        <Image src="/RQ_Logo.svg" alt="Requiem Logo" width={50} height={32} />
      </Link>

      <nav className="hidden md:flex space-x-2">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>

      <div className="flex items-center space-x-3">
        {actions}

        <MobileMenuToggle links={links} />
      </div>
    </header>
  );
}

export function NavLink({ href, label }: LinkItem) {
  return (
    <Link
      href={href}
      className="py-2 px-4 rounded-xl hover:bg-neutral-alfa-tonal-2"
    >
      {label}
    </Link>
  );
}
