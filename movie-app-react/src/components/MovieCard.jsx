import { Card } from "react-bootstrap";

export const MovieCard = ({ product }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="mb-4" key={product.id}>
        {/* <Card.Img variant="top" src={product?.image} /> */}
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
