import asyncHandler from 'express-async-handler';
import Product from '../models/productModels.js';

// @desc fetch all products
// @route Get /api/products
// @access Public
const getProducts =asyncHandler(async(req,res) => {
    const products = await Product.find({})
  
   
    res.json(products)
})

// @desc fetch single products
// @route Get /api/products/;id
// @access Public
const getProductById =asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {

      res.status(404)
      throw new Error('Product not found')
    }
})


// @desc delete a product
// @route Delete /api/products/;id
// @access Private/Admin
const deleteProduct =asyncHandler(async(req,res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({message:'product removed'})
  } else {

    res.status(404)
    throw new Error('Product not found')
  }
})

export {
    getProductById,
    getProducts,
    deleteProduct
}