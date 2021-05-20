import styled, { keyframes } from "styled-components";

const spinning = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const StyledLoader = styled.div`
  & {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid black;
    border-color: black transparent black transparent;
    animation: ${spinning} 1.2s linear infinite;
  }
`;

export default StyledLoader;
