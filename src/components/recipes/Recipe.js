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

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => navigator.serviceWorker.ready)
      .then(() => {
        navigator.serviceWorker.addEventListener("message", function (event) {
          if (event.data && event.data.state !== undefined) {
            store.article_count = event.data.state;
          }
        });
      });
  }

  const stateToServiceWorker = (data) => {
    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage(data);
    }
  };

  const updateShoppingCart = async () => {
    try {
      await store.addArticle();
      await incrementShoppingCartCount();
      await stateToServiceWorker({
        state: store.article_count,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Error: Updating Data");
    }
  };

  return (
    <StyledRecipe>
      <StyledImgContainer
        onClick={() => {
          updateShoppingCart();
        }}
      >
        <StyledCartImg
          src="/assets/images/shopping-cart.png"
          alt="Einkaufswagen"
        />
      </StyledImgContainer>
      {props.recipe.category === "Vorspeise" && (
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
