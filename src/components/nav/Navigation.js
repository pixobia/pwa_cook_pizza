import React from "react";
import {StyledNavigation} from "./Navigation.style"
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <StyledNavigation>
            <h1>Cook & Pizza</h1>
                <img src="./assets/images/info.svg" alt="Informations Icon" />
        </StyledNavigation>
    );
};

export default Navigation;
