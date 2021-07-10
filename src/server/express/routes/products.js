import express from "express";
import { getAllItems, getOneItem } from '../../../database/jsonReader.js';

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  console.log('GET request on /products');
  res.status(200).json(getAllItems());
});

productsRouter.get('/:id([0-9]+)', (req, res) => {
  const id = Number(req.params.id) - 1;
  console.log('GET request on /products/' + id);
  res.status(200).json(getOneItem(id));
});

export default productsRouter;