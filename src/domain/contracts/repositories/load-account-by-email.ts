import { Account } from "@/domain/models";

type Input = LoadAccountByEmailRepository.Input;
type Output = LoadAccountByEmailRepository.Output;

export interface LoadAccountByEmailRepository {
  loadByEmail: (input: Input) => Promise<Output | null>;
}

export namespace LoadAccountByEmailRepository {
  export type Input = string;
  export type Output = Account;
}
