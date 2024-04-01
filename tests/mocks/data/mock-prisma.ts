import { vi } from "vitest";

export const mockPrismaClient = {
  account: {
    findUnique: vi.fn(),
    create: vi.fn(),
  },
};
