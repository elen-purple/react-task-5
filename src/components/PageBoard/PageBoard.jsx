import { MenuList } from "../MenuList/MenuList";
import { Section } from "./PageBoardStyled";
export const PageBoard = ({ menu, icons }) => {
  return (
    <Section>
      <ul>
        <MenuList menu={menu} icons={icons} />
      </ul>
    </Section>
  );
};
