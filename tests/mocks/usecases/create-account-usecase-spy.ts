import { faker } from "@faker-js/faker";

import { CreateAccount } from "@/domain/entities";
import { Account, OAuthUser } from "@/domain/models";

export class CreateAccountUseCaseSpy implements CreateAccount {
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
