import styled from "styled-components";

export const HeaderContainer = styled.div(({ theme: { backgroundColors } }) => {
  console.log(backgroundColors);

  return `
  width: 100%;
  height: 86px;
  background-color: ${backgroundColors.secondary};

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
});
