import { PrismaClient, Portfolio as PrismaPortfolio } from "@prisma/client";

import { AddPortfolioRepository } from "@/domain/contracts/repositories";

import { Portfolio, PortfolioDTO } from "@/domain/models";

export class PortfolioPostgreSqlRepository implements AddPortfolioRepository {
  constructor(private readonly client: PrismaClient) {}

  async add(input: PortfolioDTO): Promise<Portfolio> {
    const { name, description, accountId } = input;

    const result = await this.client.portfolio.create({
      data: {
        name,
        description,
        accountId,
      },
    });

    return this.mapToPortfolio(result);
  }

  private mapToPortfolio(result: PrismaPortfolio): Portfolio {
    const { id, name, description } = result;

    return {
      id,
      name,
      description,
    };
  }
}
