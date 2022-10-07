import React from "react";
import styled from "styled-components";
import HeroImage from "public/Hero.svg";

const MainContainer = styled.div`
  width: 100%;
  height: calc(100% - 86px);
  padding: 48px;
  background-image: url(${HeroImage?.src});
`;

export default function HeroContainer({ children }: { children: any }) {
  return <MainContainer>{children}</MainContainer>;
}
