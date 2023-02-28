import React, { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="mt-2">
        <Card.Img variant="top" src={pizza.image} onClick={handleShow} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Size</h6>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                  className={"p-1"}
                >
                  {pizza.varients.map((varient) => (
                      <option key={varient}>{varient}</option>
                  ))}
                </select>
              </Col>

              <Col md={6}>
                <h6>Quantity</h6>
                <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>
              <span className="fs-5 fw-bold  text-danger">
                Price : ${pizza.prices[0][varient] * quantity}
              </span>
            </Col>
            <Col md={6}>
              <Button
                onClick={addToCartHandler}
                className="bg-danger text-white"
              >
                Add to cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Modol */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={pizza.image}
              // style={{ height: "250px" }}
            />
            <div>
              <h6>Description:</h6>
              <h6>{pizza.description}</h6>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={addToCartHandler}>
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

};

export default Pizza;
