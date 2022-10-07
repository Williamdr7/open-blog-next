import HeroContainer from "components/HeroContainer";
import Spacing from "components/Spacing";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as S from "./styles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open Blog</title>
        <meta name="description" content="Open Blog Using Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroContainer>
        <S.MainContent>
          <S.MainContentBox>
            <S.MainContentTitle>
              Hi, {"I'm"} William <br />
              Front End Dev
            </S.MainContentTitle>
            <Spacing mTop="16px" />
            <S.MainContentDescription>
              On this blog I share tips and tricks, frameworks, projects,
              tutorials, etc Make sure you subscribe to get the latest updates
            </S.MainContentDescription>
          </S.MainContentBox>
          <Image
            width="435"
            height="363"
            src="/HeroImage.svg"
            alt="Hero Image"
          />
        </S.MainContent>
      </HeroContainer>
      <CategoryContainer />
    </>
  );
};

export default Home;
