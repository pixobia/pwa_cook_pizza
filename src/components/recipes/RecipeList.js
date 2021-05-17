import React from "react";
import {useCookPizzaStore} from "../../CookPizzaContext";
import {useObserver} from "mobx-react-lite";
import Recipe from "./Recipe";
import {StyledRecipeList, StyledRecipeItem} from "./RecipeList.style";

const RecipeList = () => {
    const store = useCookPizzaStore();
    const recipeItems = store.recipes.map((recipe) =>
        <StyledRecipeItem key={recipe.title}>
            <Recipe recipe={recipe}/>
        </StyledRecipeItem>
    )

    return useObserver(() => (
        <StyledRecipeList>
            {recipeItems}
        </StyledRecipeList>
    ));
};

export default RecipeList;