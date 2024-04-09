import { faker } from "@faker-js/faker";

import { Portfolio, PortfolioDTO } from "@/domain/models";

import { AddPortfolioRepository } from "@/domain/contracts/repositories";

export class AddPortfolioRepositorySpy implements AddPortfolioRepository {
  input: PortfolioDTO = {
    name: faker.person.fullName(),
    description: faker.word.words(10),
  };

  output: Portfolio = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    description: faker.word.words(10),
  };

  async add(input: PortfolioDTO): Promise<Portfolio> {
    this.input = input;

    return this.output;
  }
}
