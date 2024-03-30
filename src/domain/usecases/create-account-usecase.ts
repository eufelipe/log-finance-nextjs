import { AddAccountRepository } from "@/domain/contracts/repositories";
import { CreateAccount } from "@/domain/entities";
import { AccountCreationError } from "@/domain/errors";

type Input = CreateAccount.Input;
type Output = CreateAccount.Output;

export class CreateAccountUseCase implements CreateAccount {
  constructor(private readonly repository: AddAccountRepository) {}

  async create(input: Input): Promise<Output> {
    try {
      const account = await this.repository.create(input);

      return account;
    } catch (error) {
      throw new AccountCreationError("Error on CreateAccount");
    }
  }
}
