import { Account, OAuthUser } from "@/domain/models";

type Input = LoadAccountByEmailRepository.Input;
type Output = LoadAccountByEmailRepository.Output;

export interface LoadAccountByEmailRepository {
  loadByEmail: (input: Input) => Promise<Output | null>;
}

export namespace LoadAccountByEmailRepository {
  export type Input = OAuthUser;
  export type Output = Account;
}
