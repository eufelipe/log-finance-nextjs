import { CreateAccountUseCase } from "@/domain/usecases";

import { AccountPostgreSqlRepository, prismaClient } from "@/infra";

const accountSupabaseRepository = new AccountPostgreSqlRepository(prismaClient);

export const createAccountUseCaseFactory = new CreateAccountUseCase(
  accountSupabaseRepository,
);
