import React, { Fragment ,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import {listProductsDetails} from '../actions/productActions'
import Loader from '../components/Loader';
import Message from '../components/Message'


const ProductScreen = ({ match }) => {
  
  const dispatch =useDispatch()
  const productDetails = useSelector(state => state.productDetails);
  const {loading,product,error} =productDetails;


  useEffect(()=>{
    dispatch(listProductsDetails(match.params.id))
},[dispatch,match])


  return (
    <Fragment>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>

  {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : product && (

  
     <Row>
     <Col md={6}>
       <Image src={product.image} alt={product.name} fluid />
     </Col>

     <Col md={3}>
       <ListGroup variant='flush'>
         <ListGroup.Item>
           <h3>{product.name}</h3>
         </ListGroup.Item>
         <ListGroup.Item>
           <Rating
             value={product.rating}
             text={`${product.numReviews} reviews`}
           />
         </ListGroup.Item>
         <ListGroup.Item>
           <div style={{ fontSize: '1.9rem' }}>Price: {product.price}</div>
         </ListGroup.Item>
         <ListGroup.Item>
           <div style={{ fontSize: '1rem' }}>
             Description: {product.description}
           </div>
         </ListGroup.Item>
       </ListGroup>
     </Col>
     <Col md={3}>
       <Card>
         <ListGroup variant='flush'>
           <ListGroup.Item>
             <Row>
               <Col>Price:</Col>
               <Col>
                 <strong style={{ fontSize: '1.9rem' }}>
                   ${product.price}
                 </strong>
               </Col>
             </Row>
           </ListGroup.Item>
           <ListGroup.Item>
             <Row>
               <Col>
                 <div style={{ fontSize: '1.5rem' }}>Status:</div>
               </Col>
               <Col>
                 <div style={{ fontSize: '1.5rem' }}>
                   {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                 </div>
               </Col>
             </Row>
           </ListGroup.Item>

           <ListGroup.Item>
             <Button
               className='btn-block'
               type='Button'
               disabled={product.countInStock === 0}
             >
               Add To Cart
             </Button>
           </ListGroup.Item>
         </ListGroup>
       </Card>
     </Col>
   </Row>
  )}

     
    </Fragment>
  )
}

export default ProductScreen
