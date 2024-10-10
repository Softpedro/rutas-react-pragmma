import { Link } from "react-router-dom";
import { products } from "../data/products";

const Products = () => {
  return (
    <div>
      <h2>Listado de productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
