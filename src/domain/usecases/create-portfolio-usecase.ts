import { AddPortfolioRepository } from "@/domain/contracts/repositories";
import { CreatePortfolio } from "@/domain/entities";
import { UnexpectedError } from "@/domain/errors";

type Input = CreatePortfolio.Input;
type Output = CreatePortfolio.Output;

export class CreatePortfolioUseCase implements CreatePortfolio {
  constructor(private readonly repository: AddPortfolioRepository) {}

  async create(input: Input): Promise<Output> {
    try {
      const account = await this.repository.add(input);

      return account;
    } catch (error) {
      throw new UnexpectedError("Error on CreatePortfolio");
    }
  }
}
