"use client";

import { SIGN_IN_PROVIDER } from "@/app/config/constants";
import Image from "next/image";

const BASE_ASSES_URL = "https://res.cloudinary.com/eufelipe/image/upload";

const LOGO_URL = `${BASE_ASSES_URL}/v1642222955/play_store_512_zr4qam.png`;

export type HeaderProps = {
  isAuthenticated: boolean;
  handleSignIn: (provider: string) => void;
  handleSignOut: () => void;
};

const Header = ({
  isAuthenticated,
  handleSignIn,
  handleSignOut,
}: HeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 bg-white h-20 shadow-md">
      <div className="flex items-center">
        <Image src={LOGO_URL} alt="Logo" width={50} height={50} />
        <h1 className="text-xl font-bold ml-2 text-primary-dark">
          Log Finance
        </h1>
      </div>

      {!isAuthenticated && (
        <button
          onClick={() => handleSignIn(SIGN_IN_PROVIDER)}
          className="bg-primary-dark hover:bg-green-500 text-white py-2 px-4 rounded transition ease-in-out duration-150"
        >
          Sign in with Google
        </button>
      )}

      {isAuthenticated && (
        <button
          onClick={handleSignOut}
          className="bg-primary-dark hover:bg-green-500 text-white py-2 px-4 rounded transition ease-in-out duration-150"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
