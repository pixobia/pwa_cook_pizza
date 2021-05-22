import React from "react";
import RecipeList from "../recipes/RecipeList";
import {
  StyledContainerOuter,
  StyledContainerInner,
} from "../layouts/Container.style";

import { AddButton } from "../inputs/AddButton";

const Home = () => {

  return (
      <StyledContainerOuter>
        <StyledContainerInner>
          <RecipeList />
          {/*<AddButton><p>+</p></AddButton>*/}
        </StyledContainerInner>
      </StyledContainerOuter>
  );
};

export default Home;
