import React from "react";
import {
  StyledContainerOuter,
  StyledContainerInner,
} from "../layouts/Container.style";
import { StyledUl } from "./Info.style";

const Info = () => {
  return (
    <StyledContainerOuter>
      <StyledContainerInner>
        <h2>Hungrig??! Der ultimative Cook & Pizza Online-Shop!</h2>
        <h3>Von der Vorspeise bis hin zum Dessert</h3>
        <StyledUl>
          <li>Packe deine gewünschten Gerichte in den Warenkorb!</li>
          <li>Installiere die App wenn du möchtest!</li>
          <li>
            Bekomme Notifications, wenn dein Fenster nicht gerade im Fokus
            steht!
          </li>
          <li>Update auf die neueste Version!</li>
          <li>Deine Tabs werden automatisch synchronisiert!</li>
        </StyledUl>
      </StyledContainerInner>
    </StyledContainerOuter>
  );
};

export default Info;
