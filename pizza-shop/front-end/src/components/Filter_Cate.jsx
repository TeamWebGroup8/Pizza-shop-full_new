import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaAction";
const Filter_Cate = () => {
  const [searchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();
  return (
    <div className=" mt-2">
      <Form>
        <Row>
          <Col>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option>All</option>
              <option>pizza</option>
              <option>beverage</option>
              <option>pastas</option>
              <option>salad</option>
              <option>appetizers</option>

            </select>
          </Col>
          <Col>
            <Button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                dispatch(filterPizza(searchkey, category));
              }}
            >
              Fillter Categorys
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filter_Cate;
