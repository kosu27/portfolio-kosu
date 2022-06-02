import { Button } from "@mantine/core";
import type { FC } from "react";
import { useIsDesktop } from "src/utils/customHooks";

export type SignupButtonProps = {
  text: string;
  color: string;
  bg: string;
  mr?: string;
  borderColor?: string;
  hover?: {
    color?: string;
    bg?: string;
  };
  isDisabled?: boolean;
};

const SignupButton: FC<SignupButtonProps> = (props: SignupButtonProps) => {
  const { hover, text, ...inputProps } = props;
  const isDesktop = useIsDesktop();
  const isClient = () => {
    return typeof window !== "undefined";
  };

  return (
    <>
      {isClient() && (
        <Button size={isDesktop ? "md" : "sm"} {...inputProps} {...hover}>
          {text}
        </Button>
      )}
    </>
  );
};

export { SignupButton };
