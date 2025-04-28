import { faker } from '@faker-js/faker';

export function generateTextBoxData() {
  return {
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    currentAddress: faker.location.streetAddress(),
    permanentAddress: faker.location.streetAddress()
  };
}
