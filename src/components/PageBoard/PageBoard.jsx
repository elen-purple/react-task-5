import { MenuList } from "../MenuList/MenuList";
import { Section } from "./PageBoardStyled";
export const PageBoard = ({ menu, icons }) => {
  return (
    <Section>
      <MenuList menu={menu} icons={icons} />
    </Section>
  );
};
