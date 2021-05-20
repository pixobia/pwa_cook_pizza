import React, { useEffect, useState } from "react";
import InstallButton from "../inputs/InstallButton";
import { StyledFooter } from "./Footer.style";
import UpdateButton from "../inputs/UpdateButton";
import {useCookPizzaStore} from "../../CookPizzaContext";
import {useObserver} from "mobx-react-lite";
import {StyledCartImg} from "../recipes/Recipe.style";
import {getRecipesFromFirebase, getSettingsFromFirebase} from "../../firebase";

const Footer = () => {
    const store = useCookPizzaStore();

  return useObserver(() => (
          <StyledFooter>
              <InstallButton/>
              <UpdateButton/>
              <StyledCartImg  src="/assets/images/shopping-cart.png" alt="Einkaufswagen" /> : {store.article_count}
          </StyledFooter>
      )
  );
};

export default Footer;
