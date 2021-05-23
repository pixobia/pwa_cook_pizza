import React, { useEffect, useState } from "react";

const ShareButton = () => {

    const share = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Cook & Pizza",
                    text: "Hunrig? Dann bestelle jetzt!",
                    url: "https://pwa-cook-pizza.web.app/",
                })
                .then(() => console.log("Successful share"))
                .catch((error) => console.log("Error sharing", error));
        }
    };
    return <img onClick={share} src="./assets/images/share.svg" />
};

export default ShareButton;
