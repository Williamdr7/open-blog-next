import Image from "next/image";
import styled from "styled-components";

export const MainContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainContentTitle = styled.h2`
  font-size: 48px;
`;

export const MainContentDescription = styled.p`
  border-left: 1px solid ${({ theme }) => theme.textColors.black};
  color: ${({ theme }) => theme.textColors.darkGrey};
  font-size: 18px;
  padding-left: 8px;
`;

export const MainContentBox = styled.div`
  width: 50%;
`;

export const TechnologySection = styled.div`
  display: flex;
  height: 600px;
  align-items: center;
`;
