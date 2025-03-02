import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { getProducts, filterProductsByCategory } from "./firebase.js";
import ReactLoading from "react-loading";

const divProducts = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2rem",
};
const styleH1 = {
  textAlign: "center",
  paddingTop: "30px",
  color: "rgb(0, 162, 255)",
};

const loadingContainer = {
  display: "flex",
  justifyContent: "center",
  width: "100vw",
};

export default function itemListContainer({ text }) {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!catId) {
      getProducts().then((response) => {
        setProducts(response);
        setLoading(false);
      });
    } else {
      filterProductsByCategory(catId).then((response) => {
        setProducts(response);
        setLoading(false);
      });
    }
  }, [catId]);

  return (
    <>
      <h1 style={styleH1}>
        {text} {catId}
      </h1>
      {loading ? 
        <div style={loadingContainer}>
          <ReactLoading type="spin" color="#fff" />
        </div>
       : 
        <div style={divProducts}>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      }
    </>
  );
}
