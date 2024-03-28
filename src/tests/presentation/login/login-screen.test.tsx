import { LoginScreen } from "@/presentation";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next-auth/react", () => ({
  useSession: vi.fn().mockReturnValue({ data: null }),
  signIn: vi.fn(),
  signOut: vi.fn(),
}));

vi.mock("@/app/components/Header", () => ({
  Header: () => <div>Mocked Header</div>,
}));

describe("Login Screen", () => {
  it("renders sign-in prompt when not signed in", async () => {
    render(<LoginScreen />);

    const welcomeText = await screen.findByText(
      /Uma forma simples e segura de gerenciar suas finanças./i,
    );
    expect(welcomeText).not.toBeNull();

    const signInButton = screen.getByRole("button", {
      name: /sign in with google/i,
    });
    expect(signInButton).not.toBeNull();
  });
});
