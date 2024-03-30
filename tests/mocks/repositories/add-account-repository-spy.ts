import { faker } from "@faker-js/faker";

import { Account, OAuthUser } from "@/domain/models";

import { AddAccountRepository } from "@/domain/contracts/repositories";

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
