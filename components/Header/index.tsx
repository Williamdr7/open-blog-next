import Button from "components/Button";
import Link from "next/link";
import React from "react";
import * as S from "./styles";

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.MenuItem>
          <Link href="/">OpenBlog</Link>
        </S.MenuItem>
      </S.HeaderContent>
      <S.HeaderContent>
        <S.MenuItem>Home</S.MenuItem>
        <S.MenuItem>Home</S.MenuItem>
        <S.MenuItem>Home</S.MenuItem>
        <S.MenuItem>Home</S.MenuItem>
        <S.MenuItem>
          <Button variant="primary" title="Compre-me um café" />
        </S.MenuItem>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
