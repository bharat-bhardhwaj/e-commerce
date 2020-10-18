import express from 'express'

const router = express.Router()
import {
 addOrderItems,
 getOrderID
} from '../controller/orderController.js'

import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect,addOrderItems);
router.route('/:id').get(protect,getOrderID)


export default router