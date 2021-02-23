import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import PizzaCard from "./PizzaCard";
import { firestore } from "../../firebase";

const PizzaList = () => {
  const [pizzaData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPizzaCollections();
  }, []);

  const getPizzaCollections = async () => {
    setIsLoading(true);
    try {
      const collectionRef = firestore.collection("products");
      const snapshot = await collectionRef.get();
      const data = snapshot.docs.map((doc) => {
        return doc.data();
      });

      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Row className="mt-5">
      {isLoading ? (
        <Spinner animation="grow" className="text-center" />
      ) : (
        <React.Fragment>
          {pizzaData.map((pizza, index) => {
            return <PizzaCard {...pizza} key={index} />;
          })}
        </React.Fragment>
      )}
    </Row>
  );
};

export default PizzaList;
