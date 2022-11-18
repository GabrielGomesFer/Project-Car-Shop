import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
// import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';

describe('Testa a camada service de CarService', function () {
  const service = new CarService();
  const gettedCar: ICar = {
    id: '6377bfc492f1d8b653cc5e8b',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  };

  afterEach(function () { return sinon.restore(); });
  
  describe('teste POST /cars', function () {
    it('testa registro de carros com sucesso', async function () {
      const carMock: ICar = {
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      };

      // const gettedCar: Car = new Car({ id: '1', ...carMock });

      sinon.stub(Model, 'create').resolves(gettedCar); 

      const result = await service.create(carMock);

      expect(result).to.be.deep.equal(gettedCar);
    });
  });

  describe('teste GET /cars', function () {
    it('teste getAll /cars', async function () {
      sinon.stub(Model, 'find').resolves([gettedCar]);

      const result = await service.getAll();

      expect(result).to.be.deep.equal([gettedCar]);
    });

    it('teste getById /cars', async function () {
      sinon.stub(Model, 'findById').resolves(gettedCar);

      const result = await service.getById('6377bfc492f1d8b653cc5e8b');

      expect(result).to.be.deep.equal(gettedCar);
    });
  });
});