import express from 'express';
import CarController from './Controllers/Car.Controller';
import MotorcycleController from './Controllers/Motorcycle.Controller';

const app = express();

app.use(express.json());

// /Cars
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

// MOTO
app.post('/motorcycles', (req, res, next) =>
  new MotorcycleController(req, res, next).create());

app.get('/motorcycles', (req, res, next) =>
  new MotorcycleController(req, res, next).getAllMotorcycles());

app.get('/motorcycles/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).getById());

app.put('/motorcycles/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).updateById());

export default app;
