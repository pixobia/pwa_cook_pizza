import "./App.css";
import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { useCookPizzaStore } from "./CookPizzaContext";
import Home from "./components/pages/Home";
import Navigation from "./components/nav/Navigation";
import Footer from "./components/nav/Footer";
import Loading from "./components/pages/Loading";
import { getRecipesFromFirebase } from "./firebase";

function App() {
  const store = useCookPizzaStore();
  useEffect(async () => {
    try {
      store.recipes = await getRecipesFromFirebase();
      console.log(store.recipes);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return useObserver(() => (
    <>
      <Navigation>Cook & Pizza</Navigation>
      <BrowserRouter>
        <Switch>
          <Route path="/download_work_design_comics"></Route>
          <Route path="/">
            {store.recipes === null ? <Loading /> : <Home />}
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  ));
}

export default App;
