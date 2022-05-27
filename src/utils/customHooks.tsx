import { useMediaQuery } from "src/component/Mantine/useMediaQuery";

// 引数が無い場合画面幅がxs(576px)以上ならtrueを返す
export const useIsDesktop = (): boolean => {
  const isDesktop = useMediaQuery("xs");
  return isDesktop;
};
