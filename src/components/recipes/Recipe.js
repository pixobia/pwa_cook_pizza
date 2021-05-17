import React from "react";
import {useCookPizzaStore} from "../../CookPizzaContext";
import {useObserver} from "mobx-react-lite";
import starter from "../../assets/images/starter.png";
import main_dish from "../../assets/images/main_dish.png";
import dessert from "../../assets/images/dessert.png";
import cart from "../../assets/images/shopping-cart.png";
import {StyledRecipe, StyledFoodImg, StyledCartImg, StyledImgContainer, StyledTextarea} from "./Recipe.style";

const Recipe = (props) => {
    const store = useCookPizzaStore();

    return useObserver(() => (
        <StyledRecipe>
            <StyledImgContainer>
                <StyledCartImg src={cart} alt="Einkaufswagen" />
            </StyledImgContainer>
            {props.recipe.category === "Vorpseise" &&
                <StyledFoodImg src={starter} alt="Bild einer Vorpseise" />
            }
            {props.recipe.category === "Hauptspeise" &&
            <StyledFoodImg src={main_dish} alt="Bild einer Hauptspeise" />
            }
            {props.recipe.category === "Dessert" &&
            <StyledFoodImg src={dessert} alt="Bild eines Desserts" />
            }
            <StyledTextarea>
                <h2>{props.recipe.title}</h2>
                <h3>{props.recipe.category}</h3>
                <p>{props.recipe.procedure}</p>
            </StyledTextarea>
        </StyledRecipe>
    ));
};

export default Recipe;