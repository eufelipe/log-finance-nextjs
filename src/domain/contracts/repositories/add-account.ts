import { Account, OAuthUser } from "@/domain/models";

type Input = AddAccountRepository.Input;
type Output = AddAccountRepository.Output;

export interface AddAccountRepository {
  create: (input: Input) => Promise<Output>;
}

export namespace AddAccountRepository {
  export type Input = OAuthUser;
  export type Output = Account;
}
