import { MenuItem } from "../MenuItem/MenuItem";
import { List } from "./MenuListStyled";
export const MenuList = ({ menu, icons }) => {
  return (
    <List>
      {menu.map(({ title, time, servings, calories, difficulty }, index) => {
        return (
          <MenuItem
            key={index}
            title={title}
            time={time}
            servings={servings}
            calories={calories}
            difficulty={difficulty}
            icons={icons}
          />
        );
      })}
    </List>
  );
};
