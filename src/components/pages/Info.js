import React from "react";
import {
  StyledContainerOuter,
  StyledContainerInner,
} from "../layouts/Container.style";

const Info = () => {

  return (
      <StyledContainerOuter>
        <StyledContainerInner>
          <p>
            Alle Infos zur App!
          </p>
        </StyledContainerInner>
      </StyledContainerOuter>
  );
};

export default Info;
