import React from "react";
import CategoryCard from "./components/CategoryCard";
import * as S from "./styles";
import Slider from "react-slick";

export default function Category() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 3,
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
    <S.CategoriesContainer>
      <Slider {...settings}>
        <CategoryCard title="Javascript" imgUrl="/Javascript.svg" />
        <CategoryCard title="Css" imgUrl="/Css.svg" />
        <CategoryCard title="Html" imgUrl="/React.png" />
        <CategoryCard title="React" imgUrl="/React.png" emphasis />
        <CategoryCard title="Javascript" imgUrl="/React.png" />
        <CategoryCard title="Css" imgUrl="/Css.svg" />
        <CategoryCard title="Html" imgUrl="/React.png" />
        <CategoryCard title="Javascript" imgUrl="/React.png" />
      </Slider>
    </S.CategoriesContainer>
  );
}
