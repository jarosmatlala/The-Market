import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./Layout.css";

const ProductCard = ({
  title,
  name,
  available,
  price,
  rating,
  stockStatus,
  imageSrc,
  description,
  reviews,
}) => {
  const handleButtonClick = () => {
    alert(`You Selected ${name} .Add to cart ?.`);
  };
  return (
    <div className="product-grid">
      <div className="product-card">
        <h3 className="product-name">{name}</h3>
        <img src={imageSrc} alt={title} className="product-image" />
        <div className="product-info">
          <h3 className="product-title">{title}</h3>

          <p className="product-rating">★{rating}</p>
          <p className="product-stock">{available}</p>
          <p className="product-price">R {price}</p>
          <p className="product-stock">
            {available ? "In Stock" : "Out of Stock"}
          </p>

          {description && <p className="product-description">{description}</p>}
          {/* {reviews && <p className="product-reviews">★ {reviews}</p>} */}

          <button className="buy-button" onClick={handleButtonClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Layout = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-layout">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          name={product.name}
          available={product.available}
          price={product.price}
          rating={product.rating}
          stockStatus={product.available}
          imageSrc={product.main_image}
          description={product.description}
          // reviews={product.reviews}
        />
      ))}
    </div>
  );
};
export default Layout;
