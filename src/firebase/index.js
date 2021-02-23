import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-e0XZdF3EMwSOYjojoUhbXrToAK7nfJ0",
  authDomain: "xrissypizza.firebaseapp.com",
  projectId: "xrissypizza",
  storageBucket: "xrissypizza.appspot.com",
  messagingSenderId: "859423184705",
  appId: "1:859423184705:web:dc58fca3152b9e5e3c33c0",
  measurementId: "G-R8F8BTGE3K",
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectToAdd.forEach((element) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, element);
  });
  return await batch.commit();
};

export const convertCollectionSnapShotToMap = (collections) => {
  const transformedColection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title).toLowerCase(),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedColection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
export const firestore = firebase.firestore();
