import { AuthenticationUseCase } from "@/domain/usecases";

import { AccountPostgreSqlRepository, prismaClient } from "@/infra";

import { EmailValidation } from "@/validation/validators";

import { createAccountUseCaseFactory } from "./create-account-usecase-factory";

const accountPostgreSqlRepository = new AccountPostgreSqlRepository(
  prismaClient,
);

const emailValidation = new EmailValidation();

export const authenticationUseCaseFactory = new AuthenticationUseCase(
  accountPostgreSqlRepository,
  createAccountUseCaseFactory,
  emailValidation,
);
