import styled from "styled-components";

export const Div = styled.div`
  padding: 12px;
  border-radius: 20px;
`;

export const Diff = styled.li`
  padding: 2px 6px;
  color: #ffffff;
  font-size: 14px;
  border-radius: 4px;
`;

export const Item = styled.li`
  background-color: ${(props) =>
    props.$difficulty === 3
      ? "#312020ff"
      : props.$difficulty === 1
      ? "#313020ff"
      : props.$difficulty === 0
      ? "#202c1fff"
      : ""};
  border: ${(props) =>
      props.$difficulty === 3
        ? "#aa0202ff"
        : props.$difficulty === 1
        ? "#b39200ff"
        : props.$difficulty === 0
        ? "#278300ff"
        : ""}
    4px solid;
  border-radius: 40px;
  padding: 32px 24px;
  max-width: 300px;
  width: 100%;

  ${Div} {
    background-color: ${(props) =>
      props.$difficulty === 3
        ? "#aa0202ff"
        : props.$difficulty === 1
        ? "#b39200ff"
        : props.$difficulty === 0
        ? "#278300ff"
        : ""};
  }

  ${Diff}:nth-child(${(props) =>
    props.$difficulty === 3
      ? "3"
      : props.$difficulty === 1
      ? "2"
      : props.$difficulty === 0
      ? "1"
      : ""}) {
    background-color: #ffffff;
    color: ${(props) =>
      props.$difficulty === 3
        ? "#aa0202ff"
        : props.$difficulty === 1
        ? "#b39200ff"
        : props.$difficulty === 0
        ? "#278300ff"
        : ""};
  }
`;

export const Title = styled.h3`
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

export const Params = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Param = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Span = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Subtitle = styled.h4`
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  margin-bottom: 12px;
`;

export const Diffs = styled.ul`
  display: flex;
  justify-content: space-between;
`;
