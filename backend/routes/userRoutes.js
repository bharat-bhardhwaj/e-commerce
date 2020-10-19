import express from 'express'

const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  updategetUserProfile,
  getUsers
} from '../controller/userController.js'

import { protect,admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect,admin,getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updategetUserProfile)

export default router
