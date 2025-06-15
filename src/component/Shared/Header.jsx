"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "/Pages/UseStatePage", label: "UseState" },
  { href: "/Pages/UseEffectPage", label: "UseEffect" },
  { href: "/Pages/UseReducePage", label: "UseReduce" },
  { href: "/Pages/CustomHookPage", label: "Custom hook" },
  { href: "/Pages/AsyncAndAwaitPage", label: "AsyncAndAwait" },
  { href: "/Pages/ArrayMethodPage", label: "ArrayMethod" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between px-10 py-4 shadow-lg">
      <Link href="/" className="font-semibold text-2xl">
        Learn Hooks
      </Link>
      <ul className="flex items-center justify-center gap-x-6 font-semibold">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:border-b-2 ${
              pathname === link.href ? "border-b-2 " : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;
