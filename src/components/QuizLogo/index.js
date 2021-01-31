import React from 'react';
// import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
  0% { transform: translate(200%, 0); }
  100% { transform: translate(-100%, 0); }
`;

const Marquee = styled.div`
  position: relative;
  overflow: hidden;
  --offset: 30vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
`;

Marquee.Inner = styled.div`
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: ${marquee} 10s linear infinite;
  animation-play-state: running;
`;

function Logo({ logo }) {
  return (
    <Marquee>
      <Marquee.Inner aria-hidden="true">
        <a href="/">
          <img src={logo ?? '/logo.png'} height="50" alt="external logo" />
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
