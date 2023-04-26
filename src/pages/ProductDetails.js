import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <li>{params.productId}</li>
      <p><Link to="..">Back</Link></p>
    </>
  );
}

export default ProductDetails;
