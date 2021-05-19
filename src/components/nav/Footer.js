import React, {useEffect, useState} from "react";
import InstallButton from "../inputs/InstallButton";
import {Button} from "../inputs/Button";
import {StyledFooter} from "./Footer.style";

const Footer = () => {
    return (
        <StyledFooter>
            <InstallButton />
            <Button>
                Update
            </Button>
        </StyledFooter>
    );
};

export default Footer;