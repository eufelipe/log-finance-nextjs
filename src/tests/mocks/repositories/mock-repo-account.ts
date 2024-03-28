import { faker } from "@faker-js/faker";

import { LoadAccountByEmailRepository } from "@/domain/contracts/repositories";
import { Account } from "@/domain/models";

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
