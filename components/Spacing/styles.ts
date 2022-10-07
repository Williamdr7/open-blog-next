import styled from "styled-components";
import { SpacingProps } from ".";

export const SpacingContainer = styled.div<SpacingProps>`
  margin: ${({ mTop, mLeft, mRight, mBottom }) =>
    `${mTop || 0} ${mRight || 0} ${mBottom || 0} ${mLeft || 0}`};
`;
