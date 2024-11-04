import React from 'react';
import './Layout.css';

const ProductCard = ({ title, price, rating, stockStatus, imageSrc, description, reviews }) => {
  return (
    <div className="product-card">
      <img src={imageSrc} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-rating">★{rating}</p>
        <p className="product-stock">{stockStatus}</p>
        <p className="product-price">R {price}</p>
        {description && <p className="product-description">{description}</p>}
        {reviews && <p className="product-reviews">★ {reviews}</p>}
      </div>
    </div>
  );
};

const Layout = () => {
  const products = [
    {
      title: 'African Map',
      price: '110.00',
      rating: '0.0',
      stockStatus: 'In stock',
      imageSrc: './src-images/African_Map.webp',
      description: 'A brief description of the product', 
    reviews: 'No reviews yet', 
    },
    {
      title: 'Everysun Aftersun Cooling Lotion 200ml',
      price: '79.99',
      rating: '0.0',
      stockStatus: 'In stock',
      imageSrc: './src-images/Abstract Color Painting on White Painted Wall.jpeg',
      description: 'A brief description of the product', 
    reviews: 'No reviews yet', 
    },
    {
      title: 'Bedside Table',
      price: '25.00',
      rating: '0.0',
      stockStatus: 'In stock',
      imageSrc: './src-images/Bedside Table.jpeg',
      description: 'A brief description of the product', 
    reviews: 'No reviews yet', 
    },
    {
      title: 'Bistro Table',
      price: '130.00',
      rating: '0.0',
      stockStatus: 'In stock',
      imageSrc: './src-images/Bistro Table',
      description: 'A brief description of the product', 
    reviews: 'No reviews yet', 
    },];
    
    return ( 
    
    <div className="product-layout"> 
    {products.map((product, index) => (
       <ProductCard 
       key={index} 
       title={product.title} 
       price={product.price} 
       rating={product.rating} 
       stockStatus={product.stockStatus} 
       imageSrc={product.imageSrc}
       description={product.description} 
       reviews={product.reviews} /> 
      ))} 
      </div> 
      );
     };
      export default Layout;