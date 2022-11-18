import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import MotoService from '../../../src/Services/MotoService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('Testa a camada service de MotoService', function () {
  const service = new MotoService();
  const gettedMotorcycle: IMotorcycle = {
    id: '6377cfcae765201724c373d0',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30,
    category: 'Street',
    engineCapacity: 600,
  };

  afterEach(function () { return sinon.restore(); });
  
  describe('teste POST /cars', function () {
    it('testa registro de carros com sucesso', async function () {
      const motoMock: IMotorcycle = {
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30,
        category: 'Street',
        engineCapacity: 600,
      };

      sinon.stub(Model, 'create').resolves(gettedMotorcycle); 

      const result = await service.create(motoMock);

      expect(result).to.be.deep.equal(gettedMotorcycle);
    });
  });

  describe('teste GET /cars', function () {
    it('teste getAll /cars', async function () {
      sinon.stub(Model, 'find').resolves([gettedMotorcycle]);

      const result = await service.getAll();

      expect(result).to.be.deep.equal([gettedMotorcycle]);
    });

    it('teste getById /cars', async function () {
      sinon.stub(Model, 'findById').resolves(gettedMotorcycle);

      const result = await service.getById('6377cfcae765201724c373d0');

      expect(result).to.be.deep.equal(gettedMotorcycle);
    });
  });
});