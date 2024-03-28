import { LoadAccountByEmailRepository } from "@/domain/contracts/repositories";
import { Authentication } from "@/domain/entities";

type Input = Authentication.Input;
type Output = Authentication.Output;

export class AuthenticationUseCase implements Authentication {
  constructor(private readonly repository: LoadAccountByEmailRepository) {}

  async auth(input: Input): Promise<Output> {
    try {
      const { email } = input;

      const account = await this.repository.loadByEmail(email);

      return account;
    } catch (error) {
      throw new Error("Error on authentication");
    }
  }
}
