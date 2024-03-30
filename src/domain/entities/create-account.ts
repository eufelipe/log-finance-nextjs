import { Account, OAuthUser } from "@/domain/models";

type Input = CreateAccount.Input;
type Output = CreateAccount.Output;

export interface CreateAccount {
  create: (input: Input) => Promise<Output>;
}

export namespace CreateAccount {
  export type Input = OAuthUser;

  export type Output = Account;
}
