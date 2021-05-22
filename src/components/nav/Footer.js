import React, { useEffect, useState } from "react";
import InstallButton from "../inputs/InstallButton";
import { StyledFooter, StyledCheckoutCart } from "./Footer.style";
import UpdateButton from "../inputs/UpdateButton";
import { useCookPizzaStore } from "../../CookPizzaContext";
import { useObserver } from "mobx-react-lite";
import { StyledCartImg } from "../recipes/Recipe.style";
import {
  askForPermissionToReceiveNotifications,
  getSettingsFromFirebase,
} from "../../firebase";
import { Button } from "../inputs/Button";

const Footer = () => {
  const store = useCookPizzaStore();

  return useObserver(() => (
    <StyledFooter>
      <div>
        <InstallButton />
        <UpdateButton />
        <Button onClick={askForPermissionToReceiveNotifications}>
          Notifications
        </Button>
      </div>
      <StyledCheckoutCart>
        <StyledCartImg
          src="/assets/images/shopping-cart.png"
          alt="Einkaufswagen"
        />
        <p>{store.article_count}</p>
      </StyledCheckoutCart>
    </StyledFooter>
  ));
};

export default Footer;
