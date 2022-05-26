/* eslint-disable react/jsx-key */
import { Divider, Menu, Text } from "@mantine/core";
import type { FC } from "react";
import { MessageCircle, Photo, Search, Settings } from "tabler-icons-react";

const items: JSX.Element[] = [<Text>お知らせ機能は、現在開発中です。</Text>];

const NortificationMenu: FC = () => {
  return (
    <>
      <Menu>
        {items.map((item, i) => {
          return (
            <div key={i}>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item icon={<Settings size={14} />}>Settings</Menu.Item>
              <Menu.Item icon={<MessageCircle size={14} />}>Messages</Menu.Item>
              <Menu.Item icon={<Photo size={14} />}>Gallery</Menu.Item>
              <Menu.Item
                icon={<Search size={14} />}
                rightSection={
                  <Text size="xs" color="dimmed">
                    ⌘K
                  </Text>
                }
              >
                Search
              </Menu.Item>
              {items.lastIndexOf(item) !== items.length - 1 && (
                <Divider p={0} m={0} color="gray.300" />
              )}
            </div>
          );
        })}
      </Menu>
    </>
  );
};

export { NortificationMenu };
