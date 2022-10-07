import { colors } from "@theme/styledSettings";
import styled from "styled-components";

export const ButtonContainer = styled.button<{
  variant: "primary" | "secondary";
}>`
  border: none;
  border-radius: 4px;
  min-height: 44px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${({ variant }) => colors[variant]};
  color: #fff;
`;
