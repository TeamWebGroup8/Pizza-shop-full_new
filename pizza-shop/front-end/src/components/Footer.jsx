import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer className="py-3 my-4 bg-dark">
        <Container fluid>
          <Container className="p-5">
            <Row>
              <Col md={6}>
                <Image
                  src="images/logo-p.png"
                  alt="logo"
                  style={{ height: "50px" }}
                />
              </Col>
              <Col md={6}>
                <h4 className="text-white mt-2">
                  © 2023 Pizza Shop (Cambodia) KH. All rights reserved.
                </h4>
              </Col>
            </Row>
          </Container>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
