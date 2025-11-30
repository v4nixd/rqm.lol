"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/app/lib/cn";
import { LinkItem, HeaderActivityItem } from "@/app/types/types";
import MobileMenuToggle from "@/app/components/layout/MobileLayoutToggle";
import Text from "@/app/components/ui/text";
import HomeIcon from "@/app/components/icons/Home";
import MailIcon from "@/app/components/icons/Mail";

interface HeaderProps {
  actions?: React.ReactNode;
  className?: string;
}

const NAVIGATION_LINKS: LinkItem[] = [
  { label: "Главная", href: "/", icon: HomeIcon },
  { label: "Контакты", href: "/contact", icon: MailIcon },
];

const ACTIONS = [{ href: "https://discord.gg/rqm", label: "Discord" }];

{
  /* <Link href="/" className="flex items-center space-x-4 mr-4">
  <Image
    className="rounded-xl"
    src="/RQ_FAVICON.svg"
    alt="Requiem Logo"
    width={40}
    height={40}
  />
  <Text>Requiem</Text>
</Link> */
}

export default function Header({ className }: HeaderProps) {
  const links: LinkItem[] = NAVIGATION_LINKS;
  const actions: HeaderActivityItem[] = ACTIONS;

  return (
    <header
      className={`sticky grid grid-cols-3 items-center px-4 py-2 top-0 z-50 bg-background-base-secondary/30 backdrop-blur-lg ${className}`}
    >
      <Link href="/" className="justify-self-start">
        <Image
          src="/Requiem-Logo-Plain.svg"
          alt="Requiem Logo"
          width={120}
          height={0}
        />
      </Link>

      <nav className="hidden md:flex space-x-2 justify-self-center">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>

      <div className="flex items-center space-x-3 justify-self-end">
        {/* {actions} */}
        {actions.map((action) => (
          <NavAction key={action.href} {...action} />
        ))}

        <MobileMenuToggle links={links} />
      </div>
    </header>
  );
}

function NavAction({ href, label, icon: Icon, className }: HeaderActivityItem) {
  return (
    <>
      {href && (
        <Link
          href={href}
          className={cn(
            "inline-flex items-center spaxe-x-1.5 py-2 px-4 rounded-xl hover:bg-neutral-alfa-tonal-2",
            className
          )}
        >
          {Icon && <Icon className="text-content-base-secondary w-4 h-4" />}
          <Text>{label}</Text>
        </Link>
      )}
    </>
  );
}

export function NavLink({ href, label, icon: Icon }: LinkItem) {
  return (
    <Link
      href={href}
      className="inline-flex items-center space-x-1.5 py-2 px-4 rounded-xl hover:bg-neutral-alfa-tonal-2"
    >
      {Icon && <Icon className="text-content-base-secondary w-4 h-4" />}
      <Text color={"secondary"}>{label}</Text>
    </Link>
  );
}
