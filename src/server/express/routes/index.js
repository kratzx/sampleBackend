import express from "express";
import { getFeaturedItems } from '../../../database/jsonReader.js';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  console.log('GET request on /');
  res.status(200).json(getFeaturedItems());
});

export default indexRouter;