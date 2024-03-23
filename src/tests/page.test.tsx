import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { useSession } from "next-auth/react";

import Home from "../app/page";

vi.mock("next-auth/react", () => ({
  useSession: vi.fn().mockReturnValue({ data: null }),
}));

describe("Home component", () => {
  it("renders sign-in prompt when not signed in", () => {
    render(<Home />);

    expect(screen.queryByText(/Not Signed In/i)).to.not.be.null;

    const signInButton = screen.getByRole("button", {
      name: /sign in with google/i,
    });
    expect(signInButton).not.toBeNull();
  });

  it("renders user info and sign out button when signed in", () => {
    vi.mocked(useSession).mockReturnValue({
      data: {
        user: {
          name: "Jane Doe",
          email: "jane@example.com",
          image: "https://example.com/jane.jpg",
        },
      },
      status: "authenticated",
    } as any);

    render(<Home />);

    expect(screen.getByText("Jane Doe")).not.toBeNull();
    expect(screen.getByText("jane@example.com")).not.toBeNull();
    const signOutButton = screen.getByRole("button", { name: /sign out/i });
    expect(signOutButton).not.toBeNull();
  });
});
