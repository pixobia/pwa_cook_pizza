import React from "react";
import { StyledNavigation } from "./Navigation.style";
import { Link, BrowserRouter } from "react-router-dom";
import ShareButton from "../inputs/ShareButton";

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link to="/">
        <h1>Cook & Pizza</h1>
        <ShareButton />
      </Link>
      <Link to="/info">
        <img src="./assets/images/info.svg" alt="Informations Icon" />
      </Link>
    </StyledNavigation>
  );
};

export default Navigation;
