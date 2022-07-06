import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import type { CustomNextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { AuthLayout } from '@/layout/AuthLayout'
import { getPath } from '@/lib/const'

const SignIn: CustomNextPage = () => {
  const router = useRouter()
  const signIn = () => {
    router.push(getPath('INDEX'))
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
        ログイン
      </Title>
      <Text color="dimmed" size="md" align="center" mt={5}>
        アカウントをお持ちではないですか？
        <Link href={getPath('SIGN_UP')} passHref>
          <Anchor<'a'> size="md">新規登録</Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="メールアドレス" placeholder="test@example.com" size="md" required />
        <PasswordInput label="パスワード" placeholder="Your Password" mt="md" size="md" required />
        <Group position="apart" mt="md">
          <Checkbox label="ログイン状態を保持" />
          <Link href={getPath('FORGOT_PASSWORD')} passHref>
            <Anchor<'a'> size="sm">パスワードをお忘れですか？</Anchor>
          </Link>
        </Group>
        <Button fullWidth mt="xl" onClick={signIn}>
          ログイン
        </Button>
      </Paper>
    </>
  )
}

SignIn.getLayout = AuthLayout

export default SignIn
