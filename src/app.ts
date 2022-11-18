import express from 'express';
import CarController from './Controllers/Car.Controller';

const app = express();

app.use(express.json());

app.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

app.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

app.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

app.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateById(),
);
export default app;
