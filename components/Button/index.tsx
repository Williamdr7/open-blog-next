import React from "react";
import * as S from "./styles";

interface ButtonProps {
  variant: "primary" | "secondary";
  title: string;
}

export default function Button({ variant, title, ...props }: ButtonProps) {
  return (
    <S.ButtonContainer {...props} variant={variant}>
      {title}
    </S.ButtonContainer>
  );
}
