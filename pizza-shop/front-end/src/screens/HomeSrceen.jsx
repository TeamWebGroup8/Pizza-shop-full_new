import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filters from "../components/Filters";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  const [visible, setVisible] = useState(6);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  // console.log(pizzas);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error>Error while fetching pizzas {error}</Error>
        ) : (
          <Row>
            <Filters />
            {pizzas.slice(0, visible).map((pizza) => (
              <Col md={4} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
            <Container className={"d-flex justify-content-center"}>
              <Button
                variant="outline-danger"
                className={"mt-2   px-5"}
                onClick={showMore}
              >
                More
              </Button>
            </Container>
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
