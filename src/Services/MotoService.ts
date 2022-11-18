import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoModel from '../Models/Motorcycle.model';

class MotorcycleService {
  private createMotorcycleDomains(motorcycle: IMotorcycle | null): Motorcycle | null | undefined {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }
  public async create(motorcycle: IMotorcycle) {
    const motoModel = new MotoModel();
    const newMoto = await motoModel.create(motorcycle);
    return this.createMotorcycleDomains(newMoto);
  }
  
  public async getAll() {
    const motoModel = new MotoModel();
    const motorcycles = await motoModel.getAll();
    const motorcyclesArray = motorcycles.map((moto) => this.createMotorcycleDomains(moto));
    return motorcyclesArray;
  }
  public async getById(id: string) {
    const motoModel = new MotoModel();
    const motorcycle = await motoModel.getById(id);
    return this.createMotorcycleDomains(motorcycle);
  }
  public async updateById(id: string, motorcycle: IMotorcycle) {
    const motoModel = new MotoModel();
    const motorcycles = await motoModel.updateById(id, { ...motorcycle });
    return this.createMotorcycleDomains(motorcycles);
  }
}
  
export default MotorcycleService;