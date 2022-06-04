/* eslint-disable react/destructuring-assignment */
import { RingProgress } from '@mantine/core'
import type { FC } from 'react'
import { NextImage } from 'src/component/NextImage'

export type UserIconProps = {
  src?: string | null
  width: number
  height: number
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

const UserIcon: FC<UserIconProps> = (props: UserIconProps) => {
  return (
    <RingProgress sections={[{ value: 40, color: 'blue' }]}>
      <NextImage
        src={props.src ?? '/nouser.svg'}
        alt="ユーザーアイコン"
        width={props.width}
        height={props.height}
      />
    </RingProgress>
  )
}

export { UserIcon }
