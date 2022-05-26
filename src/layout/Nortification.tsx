/* eslint-disable react/destructuring-assignment */
import { Avatar, Indicator } from "@mantine/core";
import type { FC } from "react";
import { Bell } from "tabler-icons-react";

export type NortificationProps = {
  isNortification: boolean;
};

const Notification: FC<NortificationProps> = (props: NortificationProps) => {
  return (
    <>
      {props.isNortification && (
        <Indicator
          inline
          size={16}
          offset={7}
          position="bottom-end"
          color="blue"
          withBorder
        >
          <Avatar>
            <Bell className="w-6 h-6 text-gray-500" />
          </Avatar>
        </Indicator>
      )}
    </>
  );
};

export { Notification };
