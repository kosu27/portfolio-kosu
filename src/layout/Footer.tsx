import Link from "next/link";
import type { FC } from "react";

const ITEMS = [
  { href: "/about", label: "About" },
  { href: "/support/terms", label: "利用規約" },
  { href: "/support/privacy-policy", label: "プライバシーポリシー" },
];

export const Footer: FC = () => {
  return (
    <footer className="py-10 px-6 mx-auto min-w-full text-center text-gray-500">
      <ul className="inline-grid gap-3 p-0 xs:flex xs:gap-4 xs:justify-center">
        {ITEMS.map((item) => {
          return (
            <li key={item.href} className="contents ">
              <Link href={item.label}>
                <a className="p-1 text-sm text-inherit no-underline hover:underline">
                  {item.label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>

      <small className="block mt-4" lang="en">
        &copy; 2022 kosu All Rights Reserved.
      </small>
    </footer>
  );
};
