import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { useCookPizzaStore } from "./CookPizzaContext";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";
import Navigation from "./components/nav/Navigation";
import Footer from "./components/nav/Footer";
import Loading from "./components/pages/Loading";
import { getRecipesFromFirebase, getSettingsFromFirebase } from "./firebase";

function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  const store = useCookPizzaStore();

  useEffect(async () => {
    try {
      store.recipes = await getRecipesFromFirebase();
      store.article_count = await getSettingsFromFirebase();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return useObserver(() => (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/info">
            {store.recipes === null ? <Loading /> : <Info />}
          </Route>
          <Route path="/">
            {store.recipes === null ? <Loading /> : <Home />}
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  ));
}

export default App;
