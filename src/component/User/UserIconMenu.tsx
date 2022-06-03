/* eslint-disable react/destructuring-assignment */
import { Box, Divider, Group, Menu, Text } from "@mantine/core";
import { useRouter } from "next/router";
import type { FC } from "react";
import type { LoginUser } from "src/utils/User";

// import { auth } from "@/firebase/firebase";

type UserIconMenuProps = {
  user: LoginUser;
};

const UserIconMenu: FC<UserIconMenuProps> = (props: UserIconMenuProps) => {
  const router = useRouter();

  // const handleLogout = async () => {
  //   await auth.signOut();
  //   router.push("/");
  // };

  return (
    <Group position="right">
      <Menu
        className="my-1 rounded"
        withArrow
        placement="center"
        onClick={() => {
          router.push(`/${props.user?.display_id}`);
        }}
      >
        <Box>
          <Text size="sm">{props.user?.name ?? "guest"}</Text>
          <Text size="md">@{props.user?.display_id}</Text>
          <Text color="gray.800" size="xs" mt="1">
            マイページを表示
          </Text>
        </Box>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          onClick={() => {
            router.push(`/account/profile`);
          }}
        >
          アカウント設定
        </Menu.Item>
        <Menu.Item>ログアウト</Menu.Item>
        <Box>
          <Menu.Item>カラーモード変更</Menu.Item>
        </Box>
        <Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item>アカウント削除</Menu.Item>
      </Menu>
    </Group>
  );
};

export { UserIconMenu };
