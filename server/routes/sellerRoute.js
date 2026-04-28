import express from 'express';
import { isSellerAuth } from '../controllers/sellerController';
import authSeller from '../middlewares/authSeller';

const sellerRouter = express.Router();

sellerRouter.post('/login', sellerLogin);
sellerRouter.get('/is-auth', authSeller, isSellerAuth);
sellerRouter.post('/logout', sellerLogout);

export default sellerRouter;
