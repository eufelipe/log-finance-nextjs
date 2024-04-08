import { Portfolio } from "@/domain/models";

type Input = AddPortfolioRepository.Input;
type Output = AddPortfolioRepository.Output;

export interface AddPortfolioRepository {
  add: (input: Input) => Promise<Output>;
}

export namespace AddPortfolioRepository {
  export type Input = Omit<Portfolio, "id">;
  export type Output = Portfolio;
}
