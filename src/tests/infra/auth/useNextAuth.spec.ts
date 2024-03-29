import { useNextAuth } from "@/infra/auth/useNextAuth";
import { renderHook } from "@testing-library/react-hooks";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockCreateUseAuth = vi.fn();

vi.mock("@/infra/auth/createUseAuth", () => ({
  createUseAuth: vi.fn(() => () => ({
    session: {
      isAuthenticated: true,
      user: { name: "John Doe", email: "john@example.com" },
    },
    signIn: vi.fn(),
    signOut: vi.fn(),
  })),
}));

describe("useNextAuth", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should return the expected properties from the useAuth hook", () => {
    const mockedReturn = {
      session: {
        isAuthenticated: true,
        user: { name: "John Doe", email: "john@example.com" },
      },
      signIn: vi.fn(),
      signOut: vi.fn(),
    };

    mockCreateUseAuth.mockImplementation(() => () => mockedReturn);

    const { result } = renderHook(() => useNextAuth());

    expect(result.current.session).toBeDefined();
    expect(result.current.signIn).toBeDefined();
    expect(result.current.signOut).toBeDefined();

    expect(result.current.session.isAuthenticated).toBe(true);
    expect(result.current.session.user?.name).toBe("John Doe");
  });
});
