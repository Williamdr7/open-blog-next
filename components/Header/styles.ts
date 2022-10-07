import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.div(
  ({ theme: { backgroundColors } }) => `
  width: 100%;
  height: 86px;
  background-color: ${backgroundColors.secondary};

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
);

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.h3`
  font-weight: 600;
  font-size: 20px;
  margin: 0 16px;
  color: ${({ theme }) => theme.textColors.black};

  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColors.black};
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
