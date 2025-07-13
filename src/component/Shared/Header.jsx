"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "/Pages/UseStatePage", label: "UseState" },
  { href: "/Pages/UseEffectPage", label: "UseEffect" },
  { href: "/Pages/UseReducePage", label: "UseReduce" },
  { href: "/Pages/CustomHookPage", label: "Custom hook" },
  { href: "/Pages/Promise", label: "Promise" },
  { href: "/Pages/AsyncAndAwaitPage", label: "AsyncAndAwait" },
  { href: "/Pages/ArrayMethod", label: "ArrayMethod" },
  { href: "/Pages/Callback-Function", label: "Callback-Function" },
  { href: "/Pages/Event", label: "Event" },
  { href: "/Pages/Checkout", label: "Checkout" },
  { href: "/Pages/Checkout-practice", label: "Checkout-practice" },
  { href: "/Pages/Checkout-practice-3", label: "Checkout-practice-3" },
  { href: "/Pages/Filter", label: "Filter" },
  { href: "/Pages/GraphQL", label: "GraphQL" },
  { href: "/Pages/Problems", label: "Problems" },
];

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e) => {
    const selectedPath = e.target.value;
    if (selectedPath) {
      router.push(selectedPath);
    }
  };

  return (
    <div className="flex items-center justify-between px-10 py-4 shadow-lg">
      <Link href="/" className="font-semibold text-2xl">
        CodeNest.
      </Link>
      <div className="flex items-center gap-4">
        <div className="font-semibold">
          <select
            onChange={handleChange}
            value={pathname}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Hooks</option>
            {navLinks.slice(0, 4).map((link) => (
              <option key={link.href} value={link.href}>
                {link.label}
              </option>
            ))}
          </select>
        </div>
        <div className="font-semibold">
          <select
            onChange={handleChange}
            value={pathname}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="">item list 2</option>
            {navLinks.slice(5).map((link) => (
              <option key={link.href} value={link.href}>
                {link.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
