import { faker } from "@faker-js/faker";

import { Portfolio, PortfolioDTO } from "@/domain/models";

export const makeFakePortfolioInput = (): PortfolioDTO => ({
  name: "My Portfolio",
  description: "This is a sample portfolio",
});

export const makeFakePortfolio = (): Portfolio => ({
  id: faker.string.uuid(),
  ...makeFakePortfolioInput(),
});
