import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import SessionWrapper from "@/app/components/SessionWrapper";
import { HomeScreen } from "@/presentation";

vi.mock("@/app/components/Header", () => ({
  Header: () => <div>Mocked Header</div>,
}));

describe("Home Screen", () => {
  it("renders user info and sign out button when signed in", () => {
    global.fetch = vi.fn().mockImplementation((url) => {
      if (url === "/api/auth/_log") {
        return Promise.resolve({
          json: () => Promise.resolve({}),
        });
      }
    });

    const sessionMock = {
      data: {
        user: {
          name: "Jane Doe",
          email: "jane@example.com",
          image: "https://example.com/jane.jpg",
        },
      },
      status: "authenticated",
    } as any;

    render(
      <SessionWrapper>
        <HomeScreen session={sessionMock} />
      </SessionWrapper>,
    );

    expect(screen.findByText(/Jane Doe/i)).not.toBeNull();
    expect(screen.findByText(/jane@example.com/i)).not.toBeNull();
  });
});
