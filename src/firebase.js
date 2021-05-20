import firebase from "firebase";
import "firebase/firestore";
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: true })
  .catch((err) => console.log(err));

const getFirebaseRecipes = () => {
  try {
    let data = firebase.firestore().collection("recipes");
    return data.get();
  } catch (error) {
    console.log(error);
    throw new Error("Error: Getting Recipes");
  }
};

const getRecipesFromFirebase = async () => {
  try {
    const data = await getFirebaseRecipes();
    const loadedRecipes = [];
    data.forEach((doc) => {
      loadedRecipes.push(doc.data());
    });

    return loadedRecipes;
  } catch (error) {
    console.log(error);
    throw new Error("Error: Getting Data");
  }
};

const getSettingsFromFirebase = async () => {
  try {
    const cartRef = firebase.firestore().collection('settings').doc('shopping_cart');
    const doc = await cartRef.get();
    return doc.data().article_count;
  } catch (error) {
    console.log(error);
    throw new Error("Error: Getting Data");
  }
};

// const resetShoppingCartCount = async () => {
//   try {
//     const cartRef = firebase.firestore().collection('settings').doc('shopping_cart');
//     const res = await cartRef.update({article_count: 0});
//   }
//   catch (error) {
//     console.log(error);
//     throw new Error("Error: Updating Data");
//   }
// }

const incrementShoppingCartCount = async () => {
  try {
    let settingsCountRef = firebase
        .firestore()
        .collection("settings")
        .doc("shopping_cart");

      await settingsCountRef.update({
        article_count: firebase.firestore.FieldValue.increment(1)
      });
  }
  catch {
    throw new Error("Error: Updating Data");
  }
};


export { firebaseApp, db, getRecipesFromFirebase, incrementShoppingCartCount, getSettingsFromFirebase };
