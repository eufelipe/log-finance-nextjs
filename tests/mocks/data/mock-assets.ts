import { faker } from "@faker-js/faker";

import { Asset, AssetType } from "@/domain/models";

export const makeFakeAsset = (): Asset => {
  const assetType = faker.helpers.arrayElement([
    "STOCK",
    "CRYPTOCURRENCY",
    "ETF",
    "REAL_ESTATE_FUND",
  ]) as AssetType;

  return {
    id: faker.string.uuid(),
    name: faker.company.name(),
    symbol: faker.string.alpha(),
    assetType: assetType,
    description: faker.lorem.sentence(),
    details: null,
  };
};

export const makeFakeAssets = (count: number): Asset[] => {
  return Array.from({ length: count }, () => makeFakeAsset());
};
