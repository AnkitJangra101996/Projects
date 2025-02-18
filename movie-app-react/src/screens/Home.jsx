import { Suspense, useContext, useState } from "react";
import { Search } from "../components/Search";
import { MovieCard } from "../components/MovieCard";
import { Col, Container, Form, Row } from "react-bootstrap";
import Loading from "../components/Loading";
import { ProductContext } from "../context/product";
import { ProductData } from "../data/productData";

export const Home = () => {
  const [rawProducts, setRawProducts] = useState(
    useContext(ProductContext)
  );
  console.log(rawProducts)
  const handleChange = ({ target }) => {
    console.log(target.value);
    // setProducts(
    //   ProductData.filter(
    //     (prod) =>
    //       prod.title.includes(target.value) ||
    //       prod.title.toLocaleLowerCase().includes(target.value)
    //   )
    // );
    console.log(rawProducts);
  };
  return (
    <>
      {/* <Search products={products} /> */}
      <Form className="d-flex justify-content-center">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          style={{ maxWidth: "20rem" }}
          onChange={handleChange}
        />
      </Form>
      <Container className="mt-4">
        {rawProducts.length === 0 ? (
          <h1>No Product Found</h1>
        ) : (
          <>
            <h5 className="mb-2">{rawProducts.length} Product</h5>
            <Row xs={1} sm={2} md={3} lg={4}>
              {rawProducts.map((product) => (
                <>
                  <Col>
                    <Suspense fallback={<Loading />}>
                      <MovieCard product={product} />
                    </Suspense>
                  </Col>
                </>
              ))}
            </Row>
          </>
        )}
      </Container>
    </>
  );
};
