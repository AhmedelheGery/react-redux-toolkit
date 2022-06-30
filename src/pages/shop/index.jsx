import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Shop = (props) => {

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  const [products, setProduct] = useState([]);

  return (
    <div className='products-wrapper'>
      <h1 className='my-5 text-center'>Shop</h1>
      {products.length > 0 ? (
        <div className='products row  justify-content-center'>
          {products.map((item, i) => {
            return (
              <Link
                to={`/products/${item.id}`}
                key={i}
                className='single-product col-3 border p-3 m-1'
              >
                <img style={{ width: '20%' }} src={item.image} alt='' />
                <p className='my-5' style={{ fontSize: '15px', color: '#000' }}>
                  {item.description}
                </p>
                <h3>{item.price}$</h3>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner  animation="grow" />
        </div>
      )}
    </div>
  );
};

export default Shop;
