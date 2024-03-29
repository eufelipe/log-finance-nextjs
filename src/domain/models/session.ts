export interface User {
  name: string;
  email: string;
  image?: string;
}

export interface AuthSession {
  isAuthenticated: boolean;
  user?: User;
}

export interface UseAuthReturn {
  session: AuthSession;
  signIn: () => void;
  signOut: () => Promise<void>;
}