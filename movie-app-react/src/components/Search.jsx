import { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import { ProductContext } from "../context/product";

export const Search = () => {
  const products = useContext(ProductContext);
  return (
    <>
      <Container className="search-container">
        <Form className="d-flex justify-content-center">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ maxWidth: "20rem" }}
          />
        </Form>
      </Container>
    </>
  );
};
