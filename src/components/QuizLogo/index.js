import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Marquee from './style';

function Logo() {
  return (
    <Marquee>
      <Marquee.Inner aria-hidden="true">
        <a href="/">
          <Image
            src="/logo.png"
            alt="Marqueezz logo"
            width={250}
            height={40}
          />
        </a>
      </Marquee.Inner>
    </Marquee>
  );
}

const QuizLogo = styled(Logo)`
  //margin: auto;
  //display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
