import React from "react";
import TechnologyCard from "./components/TechnologyCard";
import * as S from "./styles";
import Slider from "react-slick";
import Link from "next/link";

export default function Category() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <S.TechnologiesContainer>
      <S.MainTechnologiesTitleContainer>
        <S.MainTechnologiesTitle>
          Main Technologies ----
        </S.MainTechnologiesTitle>

        <Link href="/technologies">
          <S.MainTechnologiesTitle>See all {"->"}</S.MainTechnologiesTitle>
        </Link>
      </S.MainTechnologiesTitleContainer>

      <Slider {...settings}>
        <TechnologyCard title="Javascript" imgUrl="/Javascript.svg" />
        <TechnologyCard title="Css" imgUrl="/Css.svg" />
        <TechnologyCard title="React" imgUrl="/React.png" emphasis />
        <TechnologyCard title="Html" imgUrl="/html.png" />
        <TechnologyCard title="Javascript" imgUrl="/React.png" />
      </Slider>
    </S.TechnologiesContainer>
  );
}
