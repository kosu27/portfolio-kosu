import type { FC } from "react";
import { useIsDesktop } from "src/utils/customHooks";

import { Button } from "./Button";

export type LoginButtonProps = {
  text: string;
  color: string;
  bg: string;
  hover?: {
    color?: string;
    bg?: string;
  };
  isDisabled: boolean;
};

const LoginButton: FC<LoginButtonProps> = (props: LoginButtonProps) => {
  const { hover, text, ...inputProps } = props;
  const isDesktop = useIsDesktop();
  const isClient = () => {
    return typeof window !== "undefined";
  };

  return (
    <>
      {isClient() && (
        <Button size={isDesktop ? "md" : "sm"} _hover={hover} {...inputProps}>
          {text}
        </Button>
      )}
    </>
  );
};

export { LoginButton };
