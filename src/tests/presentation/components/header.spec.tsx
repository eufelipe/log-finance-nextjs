import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Header } from "@/presentation/components";
import { HeaderProps } from "@/presentation/components/header/header";

const props: HeaderProps = {
  isAuthenticated: false,
  handleSignIn: vi.fn(),
  handleSignOut: vi.fn(),
};

describe("Header Component", () => {
  it("should render correctly with the application logo and title", async () => {
    render(<Header {...props} />);

    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).to.exist;

    const appTitle = screen.getByText("Log Finance");
    expect(appTitle).to.exist;
  });

  it("should display login button when unauthenticated and trigger click event correctly", () => {
    const handleSignInMock = vi.fn();
    render(<Header {...props} handleSignIn={handleSignInMock} />);

    const signInButton = screen.getByText("Sign in with Google");
    expect(signInButton).to.exist;

    expect(handleSignInMock).not.toHaveBeenCalled();
    fireEvent.click(signInButton);
    expect(handleSignInMock).toHaveBeenCalled();
  });

  it("should display logout button when authenticated and trigger click event correctly", () => {
    const handleSignOutMock = vi.fn();

    render(
      <Header {...props} isAuthenticated handleSignOut={handleSignOutMock} />,
    );

    const signOutButton = screen.getByText("Sign Out");
    expect(signOutButton).toBeDefined();

    expect(handleSignOutMock).not.toHaveBeenCalled();
    fireEvent.click(signOutButton);
    expect(handleSignOutMock).toHaveBeenCalled();
  });
});
