import { faker } from "@faker-js/faker";

import { Portfolio } from "@/domain/models";

export const makeFakePortfolioInput = (): Omit<Portfolio, "id"> => ({
  name: "My Portfolio",
  description: "This is a sample portfolio",
});

export const makeFakePortfolio = (): Portfolio => ({
  id: faker.string.uuid(),
  ...makeFakePortfolioInput(),
});
