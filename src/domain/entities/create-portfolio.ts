import { Portfolio } from "@/domain/models";

type Input = CreatePortfolio.Input;
type Output = CreatePortfolio.Output;

export interface CreatePortfolio {
  create: (input: Input) => Promise<Output>;
}

export namespace CreatePortfolio {
  export type Input = Omit<Portfolio, "id">;
  export type Output = Portfolio;
}
