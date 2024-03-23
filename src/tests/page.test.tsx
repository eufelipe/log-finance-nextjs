import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Home from "../app/page";

vi.mock("next-auth/react", () => ({
  useSession: vi.fn().mockReturnValue({ data: null }),
}));

describe("Home component", () => {
  it("renders sign-in prompt when not signed in", () => {
    render(<Home />);

    expect(screen.queryByText(/Not Signed In/i)).to.not.be.null;
  });
});
