import EVCar from './100-evcar.js';
import Car from './10-car.js'; // Importing Car class

test('EVCar attributes and cloneCar method', () => {
  const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
  expect(ec1._brand).toBe("Tesla");
  expect(ec1._motor).toBe("Turbo");
  expect(ec1._color).toBe("Red");
  expect(ec1._range).toBe("250");

  const ec2 = ec1.cloneCar();
  expect(ec2).toBeInstanceOf(Car);
  expect(ec2._brand).toBe("Tesla");
  expect(ec2._motor).toBe("Turbo");
  expect(ec2._color).toBe("Red");
});
