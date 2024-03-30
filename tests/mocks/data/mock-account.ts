import { faker } from "@faker-js/faker";

import { Account, OAuthUser } from "@/domain/models";

export const makeFakeAccount = (): Account => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  image: faker.image.avatar(),
});

export const makeOAuthUser = (): OAuthUser => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  image: faker.image.avatar(),
});
