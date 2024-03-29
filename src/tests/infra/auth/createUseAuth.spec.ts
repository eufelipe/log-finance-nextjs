import { renderHook } from "@testing-library/react-hooks";
import { signIn as nextSignIn, useSession } from "next-auth/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { createUseAuth } from "@/infra/auth/createUseAuth";

vi.mock("next-auth/react", () => ({
  useSession: vi.fn(() => ({ data: null, status: "unauthenticated" })),
  signIn: vi.fn(),
  signOut: vi.fn(),
}));

const userMock = {
  name: "John Doe",
  email: "john@example.com",
  image: "https://example.com/john.jpg",
};

const signInProvider = "google";

describe("createUseAuth", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return isAuthenticated as true and a user when a session exists", () => {
    (useSession as any).mockReturnValue({
      data: { user: userMock },
      status: "authenticated",
    });

    const { result } = renderHook(() => createUseAuth()());

    expect(result.current.session.isAuthenticated).to.be.true;
    expect(result.current.session.user).to.deep.equal(userMock);
  });

  it("should return undefined user when email is empty", async () => {
    (useSession as any).mockReturnValue({
      data: { user: { ...userMock, email: "" } },
      status: "authenticated",
    });

    const { result } = renderHook(() => createUseAuth()());

    expect(result.current.session.user).to.be.undefined;
  });

  it('should use "guest" as default name and handle image correctly', async () => {
    (useSession as any).mockReturnValue({
      data: { user: { email: userMock.email, name: undefined, image: null } },
      status: "authenticated",
    });

    const { result } = renderHook(() => createUseAuth()());

    expect(result.current.session.user?.name).to.equal("guest");
    expect(result.current.session.user?.image).to.be.undefined;
  });

  it("should return isAuthenticated as false when no session exists", () => {
    (useSession as any).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    const { result } = renderHook(() => createUseAuth()());

    expect(result.current.session.isAuthenticated).to.be.false;
    expect(result.current.session.user).to.be.undefined;
  });

  it("should call nextSignIn with the signInProvider when signIn is called", () => {
    const { result } = renderHook(() => createUseAuth()());

    result.current.signIn("google");

    expect(nextSignIn).toHaveBeenCalledTimes(1);
    expect(nextSignIn).toHaveBeenCalledWith(signInProvider);
  });
});
