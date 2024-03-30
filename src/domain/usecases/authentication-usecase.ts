import { LoadAccountByEmailRepository } from "@/domain/contracts/repositories";

import { Authentication, CreateAccount } from "@/domain/entities";
import { Validation } from "@/validation/contracts";
import { ValidationError } from "@/validation/errors";
import { AuthenticationError } from "../errors";

type Input = Authentication.Input;
type Output = Authentication.Output;

export class AuthenticationUseCase implements Authentication {
  constructor(
    private readonly repository: LoadAccountByEmailRepository,
    private readonly createAccount: CreateAccount,
    private readonly validation: Validation,
  ) {}

  async auth(input: Input): Promise<Output> {
    try {
      const { email } = input;

      this.validation.validate(email);

      let account = await this.repository.loadByEmail(email);

      if (!account) {
        account = await this.createAccount.create(input);
      }

      return account;
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new AuthenticationError("Invalid email");
      }

      throw new AuthenticationError("Error on authentication");
    }
  }
}
