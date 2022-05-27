/* eslint-disable react/destructuring-assignment */
import { Box, Group, Menu } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";
import { NextImage } from "src/component/NextImage";
import { NortificationMenu } from "src/component/NotificationMenu";
import { SearchBar } from "src/component/SearchBar";
import { useIsDesktop } from "src/utils/customHooks";

import { Notification } from "./Nortification";

// export type HeaderProps = {
//   user: LoginUser;
// };

const Header: FC = () => {
  const isDesktop = useIsDesktop();

  const isClient = () => {
    return typeof window !== "undefined";
  };

  return (
    <Box className="flex relative z-10 justify-between w-full h-20 bg-gray-100 shadow">
      <Group>
        <Link href="/">
          <a className="contents select-none">
            <NextImage src="/logo.svg" alt="ロゴ" width={160} height={60} />
          </a>
        </Link>
        {isClient() && isDesktop && <SearchBar />}
      </Group>
      <Group position="right" className="flex items-center">
        {props.user ? (
          <>
            {/* Nortification */}
            <Menu>
              <Notification isNortification />
              <NortificationMenu />
            </Menu>
          </>
        ) : (
          <div></div>
        )}
      </Group>
    </Box>

    // <header className="flex fixed top-0 z-20  items-center p-4 w-full">
    //   <h1 className="flex items-center w-44">
    //     <Link href="/">
    //       <a className="contents select-none">
    //         <NextImage src="/logo.svg" alt="ロゴ" width={160} height={60} />
    //       </a>
    //     </Link>
    //   </h1>
    //   <nav className="flex  content-end mx-auto">
    //     <ul className="grid grid-cols-[auto_auto] gap-6 items-center">
    //       <li className="contents">
    //         <Link href="/faq">
    //           <a className="text-white no-underline drop-shadow-[1_1_1_#000000]">
    //             新規会員登録
    //           </a>
    //         </Link>
    //       </li>
    //       <li className="contents">
    //         <a className="py-3 px-8 rounded-2xl border-solid shadow ">
    //           ログイン
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export { Header };
