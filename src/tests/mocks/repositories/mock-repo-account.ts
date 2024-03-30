import { faker } from "@faker-js/faker";

import {
  AddAccountRepository,
  LoadAccountByEmailRepository,
} from "@/domain/contracts/repositories";
import { Account, OAuthUser } from "@/domain/models";

export class LoadAccountByEmailRepositorySpy
  implements LoadAccountByEmailRepository
{
  input = faker.internet.email();
  output: Account = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    image: faker.image.avatar(),
  };

  async loadByEmail(
    input: string,
  ): Promise<LoadAccountByEmailRepository.Output> {
    this.input = input;

    return this.output;
  }
}

export class AddAccountRepositorySpy implements AddAccountRepository {
  input: OAuthUser = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    image: faker.image.avatar(),
  };

  output: Account = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    image: faker.image.avatar(),
  };

  async create(input: OAuthUser): Promise<Account> {
    this.input = input;

    return this.output;
  }
}
