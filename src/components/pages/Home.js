import React from "react";
import RecipeList from "../recipes/RecipeList";
import {
  StyledContainerOuter,
  StyledContainerInner,
} from "../layouts/Container.style";

import { ShareButton } from "../inputs/ShareButton";

const Home = () => {
  return (
    <StyledContainerOuter>
      <StyledContainerInner>
        <RecipeList />
      </StyledContainerInner>
    </StyledContainerOuter>
  );
};

export default Home;
