import { faker } from "@faker-js/faker";

import { Portfolio } from "@/domain/models";

import { AddPortfolioRepository } from "@/domain/contracts/repositories";

export class AddPortfolioRepositorySpy implements AddPortfolioRepository {
  input: Omit<Portfolio, "id"> = {
    name: faker.person.fullName(),
    description: faker.word.words(10),
  };

  output: Portfolio = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    description: faker.word.words(10),
  };

  async add(input: Omit<Portfolio, "id">): Promise<Portfolio> {
    this.input = input;

    return this.output;
  }
}
