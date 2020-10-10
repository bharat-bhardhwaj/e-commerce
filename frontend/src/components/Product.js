import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/products/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </Link>

        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title as='div' style={{ fontSize: '1.5rem' }}>
              {product.name}
            </Card.Title>
          </Link>

          <Card.Text as='h3'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              
            />
          </Card.Text>

          <Card.Text as='h3'>
            <b>${product.price}</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
