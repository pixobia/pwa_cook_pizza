import React from "react";
import StyledLoader from "./Loading.style";
import {
  StyledContainerInner,
  StyledContainerOuter,
} from "../layouts/Container.style";

const Loading = () => {
  return (
    <StyledContainerOuter>
      <StyledContainerInner>
        <StyledLoader />
      </StyledContainerInner>
    </StyledContainerOuter>
  );
};

export default Loading;
