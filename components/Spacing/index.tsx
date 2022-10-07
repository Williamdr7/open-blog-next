import React from "react";
import * as S from "./styles";

export interface SpacingProps {
  mTop?: string;
  mLeft?: string;
  mRight?: string;
  mBottom?: string;
}

export default function Spacing(props: SpacingProps) {
  return <S.SpacingContainer {...props} />;
}
