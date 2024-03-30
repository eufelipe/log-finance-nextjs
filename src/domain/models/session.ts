import { OAuthUser } from "./oauth-user";

export interface AuthSession {
  isAuthenticated: boolean;
  user?: OAuthUser;
}

export interface UseAuthReturn {
  session: AuthSession;
  signIn: (provider: string) => void;
  signOut: () => Promise<void>;
}
