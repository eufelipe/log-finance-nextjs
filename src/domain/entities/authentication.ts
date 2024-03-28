import { Account } from "@/domain/models";

type Input = Authentication.Input;
type Output = Promise<Authentication.Output>;

export interface Authentication {
  auth: (input: Input) => Output;
}

export namespace Authentication {
  export type Input = { email: string };

  export type Output = Account;
}
