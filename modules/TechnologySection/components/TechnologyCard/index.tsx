import Spacing from "components/Spacing";
import Image from "next/image";
import React from "react";
import * as S from "./styles";

type ITechnologyCard = {
  imgUrl: string;
  title: string;
  emphasis?: boolean;
};

export default function TechnologyCard({
  imgUrl,
  title,
  emphasis,
}: ITechnologyCard) {
  return (
    <S.TechnologyCard emphasis={emphasis}>
      <S.TechnologyImage>
        <Image width={100} height={100} src={imgUrl} alt={`${title} Logo`} />
      </S.TechnologyImage>
      <S.TechnologyTitle>{title}</S.TechnologyTitle>
    </S.TechnologyCard>
  );
}
