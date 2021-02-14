import React, { useState } from "react";
import { Form, Button, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const initialState = {
  firstname: "",
  lastname: "",
  address1: "",
  address2: "",
  email: "",
  city: "",
  zip: "",
  phone: "",
};

const Order = () => {
  const [formData, setForm] = useState(initialState);
  const [show, setShow] = useState(false);

  const {
    firstname,
    lastname,
    address1,
    address2,
    email,
    city,
    zip,
    phone,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <React.Fragment>
      <Alert show={show} variant="success">
        <Alert.Heading>Order Confirmed!</Alert.Heading>
        <p>
          Hello {firstname}, Thanks for placing an order from Xrissy Pizza. Your
          order will be shipped as soon as possible. Regards Support Team
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to="/">
            <Button
              onClick={() => {
                setShow(false);
                setForm(initialState);
              }}
              variant="outline-success"
            >
              Back To Products
            </Button>
          </Link>
        </div>
      </Alert>
      <Form onSubmit={onSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridfName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={firstname}
              name="firstname"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridlName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={lastname}
              name="lastname"
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              value={phone}
              name="phone"
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={address1}
            name="address1"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            value={address2}
            name="address2"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control value={city} name="city" onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control value={zip} name="zip" onChange={handleChange} />
          </Form.Group>
        </Form.Row>

        <div className="d-flex justify-content-center">
          <Button
            variant="primary"
            type="submit"
            className="text-center"
            disabled={
              !lastname ||
              !firstname ||
              !email ||
              !address1 ||
              !city ||
              !zip ||
              !phone | show
                ? true
                : false
            }
          >
            Submit
          </Button>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default Order;
