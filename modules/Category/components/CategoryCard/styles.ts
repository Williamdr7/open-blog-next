import styled from "styled-components";

export const CategoryCard = styled.div<{ emphasis?: boolean }>`
  width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  row-gap: 18px;

  background-color: ${({ theme, emphasis }) =>
    emphasis ? theme.colors.primary : "#fff"};
  color: ${({ theme, emphasis }) =>
    !emphasis ? theme.textColors.black : "#fff"};

  img {
    width: 100% !important;
    height: 100% !important;
  }
`;

export const CategoryTitle = styled.span`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

export const CategoryImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
