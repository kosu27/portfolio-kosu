import { Anchor, Button, Paper, PasswordInput, Space, Text, TextInput, Title } from '@mantine/core'
import type { CustomNextPage } from 'next'
import Link from 'next/link'

import { AuthLayout } from '@/layout/AuthLayout'
import { getPath } from '@/lib/const'

const SignUp: CustomNextPage = () => {
  const signUp = () => {
    alert('メールを送信しました')
  }

  return (
    <>
      <Title
        align="center"
        sx={(theme) => {
          return {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          }
        }}
      >
        新規登録
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        アカウントを既にお持ちですか？{' '}
        <Link href={getPath('SIGN_IN')} passHref>
          <Anchor<'a'> size="sm">ログイン</Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="メールアドレス" placeholder="test@example.com" size="md" required />
        <PasswordInput label="パスワード" placeholder="Your password" size="md" required mt="md" />
        <Space h="md" />
        <Button fullWidth mt="xl" onClick={signUp}>
          新規登録
        </Button>
      </Paper>
    </>
  )
}

SignUp.getLayout = AuthLayout

export default SignUp
