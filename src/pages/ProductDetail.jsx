import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((product) => product.id === parseInt(id));
  return (
    <div>
      <button type="button" onClick={() => navigate("/products")}>
        {" "}
        &larr; Atras{" "}
      </button>
      <h2>Detalle del producto</h2>
      <p>{product.name}</p>
      <br />
      <hr />
      <br />
      <h3>Descripción del producto</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
