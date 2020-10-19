import express from 'express'

const router = express.Router()
import {
 addOrderItems,
 getOrderID,
 updateOrderToPaid,
 getMyOrders
} from '../controller/orderController.js'

import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect,addOrderItems);
router.route('/myorders').get(protect,getMyOrders);
router.route('/:id').get(protect,getOrderID);
router.route('/:id/pay').put(protect,updateOrderToPaid)


export default router