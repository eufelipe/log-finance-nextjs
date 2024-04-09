import { AddPortfolioRepository } from "@/domain/contracts/repositories";
import { CreatePortfolio } from "@/domain/entities";
import { UnexpectedError } from "@/domain/errors";
import { Validation } from "@/validation/contracts";
import { RequiredFieldError, ValidationError } from "@/validation/errors";

type Input = CreatePortfolio.Input;
type Output = CreatePortfolio.Output;

export class CreatePortfolioUseCase implements CreatePortfolio {
  constructor(
    private readonly repository: AddPortfolioRepository,
    private readonly validation: Validation,
  ) {}

  async create(input: Input): Promise<Output> {
    try {
      const { name } = input;

      this.validation.validate(name);

      const portfolio = await this.repository.add(input);

      return portfolio;
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new RequiredFieldError("Invalid name field");
      }

      throw new UnexpectedError("Error on CreatePortfolio");
    }
  }
}
