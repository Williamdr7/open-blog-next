import Spacing from "components/Spacing";
import Image from "next/image";
import React from "react";
import * as S from "./styles";

type ICategoryCard = {
  imgUrl: string;
  title: string;
  emphasis?: boolean;
};

export default function CategoryCard({
  imgUrl,
  title,
  emphasis,
}: ICategoryCard) {
  return (
    <S.CategoryCard emphasis={emphasis}>
      <S.CategoryImage>
        <Image width={100} height={100} src={imgUrl} alt={`${title} Logo`} />
      </S.CategoryImage>
      <S.CategoryTitle>{title}</S.CategoryTitle>
    </S.CategoryCard>
  );
}
