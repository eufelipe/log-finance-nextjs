import { PrismaClient } from "@prisma/client";

import {
  AddAccountRepository,
  LoadAccountByEmailRepository,
} from "@/domain/contracts/repositories";

import { Account, OAuthUser } from "@/domain/models";

export class AccountPostgreSqlRepository
  implements LoadAccountByEmailRepository, AddAccountRepository
{
  constructor(private readonly client: PrismaClient) {}

  async loadByEmail(
    input: string,
  ): Promise<LoadAccountByEmailRepository.Output> {
    const result = await this.client.account.findUnique({
      where: { email: input },
    });

    if (!result) return null;

    return this.mapToAccount(result);
  }

  async create(input: OAuthUser): Promise<Account> {
    const result = await this.client.account.create({
      data: { ...input, name: input.name ?? "guest" },
    });

    return this.mapToAccount(result);
  }

  private mapToAccount(result: any): Account {
    return {
      id: result.id,
      email: result.email,
      name: result.name,
      image: result.image,
    };
  }
}
