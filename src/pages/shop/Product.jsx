import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Product = () => {
  const urlParams = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  const [product, setProduct] = useState({});

  const {image,title} = product;
  return (
    <div className='product d-flex justify-content-center'>
      {product ? (
        <Card className='my-5' style={{ width: '25rem' }}>
          <Card.Img
            className='w-50 mx-auto'
            variant='top'
            src={image}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <hr />
            <Card.Text>{product.description}</Card.Text>
            <hr />
            <Card.Text>{product.category}</Card.Text>
            <hr />
            <Card.Text className='text-success font-weight-bold text-center'>
              {product.price}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>-</p>
      )}
    </div>
  );
};

export default Product;
