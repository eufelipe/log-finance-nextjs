import { PrismaClient } from "@prisma/client";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { OAuthUser } from "./../../../../src/domain/models/oauth-user";

import { AccountPostgreSqlRepository } from "@/infra";
import { mockPrismaClient } from "@/tests/mocks";

type SutTypes = {
  sut: AccountPostgreSqlRepository;
};

const makeSut = (): SutTypes => {
  const sut = new AccountPostgreSqlRepository(
    mockPrismaClient as unknown as PrismaClient
  );

  return {
    sut,
  };
};

const mockAccount = {
  id: "1",
  email: "test@example.com",
  name: "Test User",
  image: "test.png",
};

describe("AccountPostgreSqlRepository", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should load an account by email successfully", async () => {
    const { sut } = makeSut();

    mockPrismaClient.account.findUnique.mockResolvedValue(mockAccount);

    const account = await sut.loadByEmail("test@example.com");

    expect(account).toEqual({
      id: "1",
      email: "test@example.com",
      name: "Test User",
      image: "test.png",
    });

    expect(mockPrismaClient.account.findUnique).toHaveBeenCalledWith({
      where: { email: "test@example.com" },
    });
  });

  it("should return null if an account is not found", async () => {
    const { sut } = makeSut();

    mockPrismaClient.account.findUnique.mockResolvedValue(null);

    const account = await sut.loadByEmail("notfound@example.com");

    expect(account).toBeNull();
    expect(mockPrismaClient.account.findUnique).toHaveBeenCalledWith({
      where: { email: "notfound@example.com" },
    });
  });

  it('should assign "guest" as name if not provided', async () => {
    const { sut } = makeSut();

    const inputWithoutName = {
      email: "guest@example.com",
      image: "guest.png",
    };

    const expected = {
      id: "3",
      ...inputWithoutName,
      name: "guest",
    };

    mockPrismaClient.account.create.mockResolvedValue(expected);

    const account = await sut.create(inputWithoutName as OAuthUser);

    expect(account).toEqual(expected);
    expect(mockPrismaClient.account.create).toHaveBeenCalledWith({
      data: {
        ...inputWithoutName,
        name: "guest",
      },
    });
  });
});
