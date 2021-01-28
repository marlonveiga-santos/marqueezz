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
export default Marquee;
