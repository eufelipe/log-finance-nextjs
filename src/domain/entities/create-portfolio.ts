import { Portfolio, PortfolioDTO } from "@/domain/models";

type Input = CreatePortfolio.Input;
type Output = CreatePortfolio.Output;

export interface CreatePortfolio {
  create: (input: Input) => Promise<Output>;
}

export namespace CreatePortfolio {
  export type Input = PortfolioDTO;
  export type Output = Portfolio;
}
