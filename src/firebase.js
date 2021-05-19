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
const db = firebase.firestore().enablePersistence({ synchronizeTabs: true })
    .catch(err => console.log(err));

const getFirebaseRecipes = () => {
  try {
    console.log("connection to FB")
    let data = firebase
      .firestore()
      .collection("recipes")
    return data.get();
  } catch (error) {
    console.log(error);
    throw new Error("Error: Getting Recipes");
  }
};

const getRecipesFromFirebase = async () => {
  try {
    console.log("connected")
    const data = await getFirebaseRecipes();
    const loadedRecipes = [];
    data.forEach((doc) => {
      loadedRecipes.push(doc.data());
      console.log(doc.data());
    });

    return loadedRecipes;
  } catch (error) {
    console.log(error);
    throw new Error("Error: Getting Data");
  }
};


export {
  firebaseApp,
  db,
  getRecipesFromFirebase
};
