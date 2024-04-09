import { Portfolio, PortfolioDTO } from "@/domain/models";

type Input = AddPortfolioRepository.Input;
type Output = AddPortfolioRepository.Output;

export interface AddPortfolioRepository {
  add: (input: Input) => Promise<Output>;
}

export namespace AddPortfolioRepository {
  export type Input = PortfolioDTO;
  export type Output = Portfolio;
}
