import React from "react";
import { useCookPizzaStore } from "../../CookPizzaContext";
import { incrementShoppingCartCount } from "../../firebase";
import {
  StyledRecipe,
  StyledFoodImg,
  StyledCartImg,
  StyledImgContainer,
  StyledTextarea,
} from "./Recipe.style";

const Recipe = (props) => {
    const store = useCookPizzaStore();
    const updateShoppingCart = async() => {
        try {
            await store.addArticle();
            await incrementShoppingCartCount();
        }
        catch (error) {
           console.log(error);
            throw new Error("Error: Updating Data");
        }
    }
  return (
    <StyledRecipe>
      <StyledImgContainer onClick={() => {
          updateShoppingCart();
      }}>
        <StyledCartImg
          src="/assets/images/shopping-cart.png"
          alt="Einkaufswagen"
        />
      </StyledImgContainer>
      {props.recipe.category === "Vorpseise" && (
        <StyledFoodImg
          src="/assets/images/starter.png"
          alt="Bild einer Vorpseise"
        />
      )}
      {props.recipe.category === "Hauptspeise" && (
        <StyledFoodImg
          src="/assets/images/main_dish.png"
          alt="Bild einer Hauptspeise"
        />
      )}
      {props.recipe.category === "Dessert" && (
        <StyledFoodImg
          src="/assets/images/dessert.png"
          alt="Bild eines Desserts"
        />
      )}
      <StyledTextarea>
        <h2>{props.recipe.title}</h2>
        <h3>{props.recipe.category}</h3>
        <p>{props.recipe.procedure}</p>
      </StyledTextarea>
    </StyledRecipe>
  );
};

export default Recipe;
