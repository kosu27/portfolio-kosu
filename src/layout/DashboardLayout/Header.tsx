/* eslint-disable react/destructuring-assignment */
import { Box, Group, Menu } from '@mantine/core'
import Link from 'next/link'
import type { FC } from 'react'
import { NextImage } from 'src/component/NextImage'
import { NortificationMenu } from 'src/component/NotificationMenu'
import { SearchBar } from 'src/component/SearchBar'
import { UserIcon } from 'src/component/User/UserIcon'
import { UserIconMenu } from 'src/component/User/UserIconMenu'
import { useIsDesktop } from 'src/utils/customHooks'
import type { LoginUser } from 'src/utils/User'

import { SignupButton } from '@/component/Button/SignupButton'

import { Notification } from '../Nortification'

export type HeaderProps = {
  user: LoginUser
}

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const isDesktop = useIsDesktop()

  const isClient = () => {
    return typeof window !== 'undefined'
  }

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
            {/* User Icon */}
            <Menu>
              {props.user.image ? (
                <UserIcon src={props.user.image} width={45} height={45} />
              ) : (
                <UserIcon src="/nouser.svg" width={45} height={45} />
              )}
              {/* todo userを渡す */}
              <UserIconMenu user={props.user} />
            </Menu>
          </>
        ) : (
          <>
            {/* Signup Button */}
            <Link href="/sign-up">
              <a>
                <SignupButton
                  text={isDesktop ? '新規会員登録' : '会員登録'}
                  bg="blue.300"
                  color="white"
                  hover={{ bg: 'blue.400' }}
                />
              </a>
            </Link>
            {/* Login Button */}
            <Link href="/sign-in">
              <a>
                <SignupButton
                  text="ログイン"
                  bg="white"
                  color="blue.300"
                  borderColor="blue.300"
                  hover={{ bg: 'blue.300', color: 'white' }}
                  mr="20px"
                />
              </a>
            </Link>
          </>
        )}
      </Group>
      {isClient() && !isDesktop && <SearchBar />}
    </Box>
  )
}

export { Header }
