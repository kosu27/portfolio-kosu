import { Kbd, TextInput } from "@mantine/core";
import type { FC } from "react";
import { Search } from "tabler-icons-react";

const SearchBar: FC = () => {
  const rightSection = (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Kbd>Ctrl</Kbd>
      <span style={{ margin: "0 5px" }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );

  return (
    <TextInput
      placeholder="Search"
      icon={<Search size={16} />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ rightSection: { pointerEvents: "none" } }}
    />
  );
};

export { SearchBar };
