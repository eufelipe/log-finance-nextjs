import { PrismaClient } from "@prisma/client";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { PortfolioPostgreSqlRepository } from "@/infra";

import {
  makeFakePortfolio,
  makeFakePortfolioInput,
  mockPrismaClient,
} from "@/tests/mocks";

type SutTypes = {
  sut: PortfolioPostgreSqlRepository;
};

const makeSut = (): SutTypes => {
  const sut = new PortfolioPostgreSqlRepository(
    mockPrismaClient as unknown as PrismaClient
  );

  return { sut };
};

const mockPortfolioDTO = makeFakePortfolioInput();
const mockPortfolio = makeFakePortfolio();

describe("PortfolioPostgreSqlRepository", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should add a portfolio successfully", async () => {
    const { sut } = makeSut();

    mockPrismaClient.portfolio.create.mockResolvedValue(mockPortfolio);

    const portfolio = await sut.add(mockPortfolioDTO);

    expect(portfolio).toEqual({
      id: mockPortfolio.id,
      name: mockPortfolio.name,
      description: mockPortfolio.description,
    });

    expect(mockPrismaClient.portfolio.create).toHaveBeenCalledWith({
      data: mockPortfolioDTO,
    });
  });
});
