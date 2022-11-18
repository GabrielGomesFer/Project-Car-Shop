import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/Car.model';

class CarService {
  private createCarDomains(car: ICar | null): Car | null | undefined {
    if (car) {
      return new Car(car);
    }
    return null;
  }
  public async create(car: ICar) {
    const carModel = new CarModel();
    const cars = await carModel.create(car);

    return this.createCarDomains(cars);
  }

  public async getAll() {
    const carModel = new CarModel();
    const cars = await carModel.getAll();

    const carArray = cars.map((car: ICar) => this.createCarDomains(car));

    return carArray;
  }

  public async getById(id: string) {
    const carModel = new CarModel();
    const car = await carModel.getById(id);

    return this.createCarDomains(car);
  }

  public async updateById(id: string, car: ICar) {
    const carModel = new CarModel();
    await carModel.updateById(id, car);
  }
}

export default CarService;