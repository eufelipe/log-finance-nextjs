import { faker } from "@faker-js/faker";

import { Portfolio, PortfolioDTO } from "@/domain/models";

export const makeFakePortfolioInput = (): PortfolioDTO => ({
  name: faker.finance.accountName(),
  description: faker.lorem.paragraph(),
  accountId: faker.string.uuid(),
});

export const makeFakePortfolio = (): Portfolio => ({
  id: faker.string.uuid(),
  ...makeFakePortfolioInput(),
});
