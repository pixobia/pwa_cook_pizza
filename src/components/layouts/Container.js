import React from "react";
import { useCookPizzaStore } from "../../CookPizzaContext";
import { useObserver } from "mobx-react-lite";
import StyledContainer from "./Container.style";

const Container = () => {
  const store = useCookPizzaStore();

  return useObserver((children) => (
    <StyledContainer>{children}</StyledContainer>
  ));
};

export default Container;
