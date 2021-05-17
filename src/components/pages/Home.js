import React from "react";
import { useCookPizzaStore } from "../../CookPizzaContext";
import { useObserver } from "mobx-react-lite";
import Button from "../inputs/Button";
import Navigation from "../nav/Navigation";
import Container from "../layouts/Container";
import RecipeList from "../recipes/RecipeList";

const Home = () => {
    const store = useCookPizzaStore();

    return useObserver(() => (
        <>
            <h2>Rezepte</h2>
            <RecipeList/>
        </>
    ));
};

export default Home;