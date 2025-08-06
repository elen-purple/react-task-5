import {
  Diff,
  Diffs,
  Div,
  Item,
  Param,
  Params,
  Span,
  Subtitle,
  Text,
  Title,
} from "./MenuItemStyled";

export const MenuItem = ({
  title,
  time,
  servings,
  calories,
  difficulty,
  icons,
}) => {
  const Time = icons[0];
  const Servings = icons[1];
  const Calories = icons[2];
  return (
    <Item $difficulty={difficulty}>
      <Title>{title}</Title>
      <Params>
        <Param>
          <Time size={32} fill="#ffffff" />
          <Text>
            <Span>{time}</Span> min
          </Text>
        </Param>
        <Param>
          <Servings size={32} fill="#ffffff" />
          <Text>
            <Span>{servings}</Span> servings
          </Text>
        </Param>
        <Param>
          <Calories size={32} fill="#ffffff" />
          <Text>
            <Span>{calories}</Span> calories
          </Text>
        </Param>
      </Params>
      <Div>
        <Subtitle>Difficulty</Subtitle>
        <Diffs>
          <Diff>Easy</Diff>
          <Diff>Medium</Diff>
          <Diff>Hard</Diff>
        </Diffs>
      </Div>
    </Item>
  );
};
