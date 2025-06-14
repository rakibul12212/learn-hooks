import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex  items-center justify-between px-10 py-4 shadow-lg">
      <Link href="/" className="font-semibold text-2xl">
        Learn Hooks
      </Link>
      <ul className="flex items-center justify-center gap-x-6 font-semibold">
        <Link href="/Pages/UseStatePage">UseState</Link>
        <Link href="/Pages/UseEffectPage">UseEffect</Link>
        <Link href="/Pages/UseReducePage">UseReduce</Link>
        <Link href="/Pages/CustomHookPage">Custom hook</Link>
        <Link href="/Pages/PromisePage">Promise</Link>
        <Link href="/Pages/ArrayMethodPage">ArrayMethod</Link>
      </ul>
    </div>
  );
};

export default Header;
