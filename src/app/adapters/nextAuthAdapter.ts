import { OAuthUser } from "@/domain/models";
import { AuthenticationUseCase } from "@/domain/usecases";

import type { CallbacksOptions } from "next-auth";

type Props = {
  authenticationUseCase: AuthenticationUseCase;
};

export const nextAuthAdapter = ({
  authenticationUseCase,
}: Props): Partial<CallbacksOptions> => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async signIn({ user, account, profile }): Promise<boolean> {
    try {
      const input: OAuthUser = {
        email: String(user.email ?? profile?.email),
        name: user.name ?? profile?.name ?? "guest",
        image: user.image ?? profile?.image,
      };

      console.log("input", input);

      await authenticationUseCase.auth(input);

      return true;
    } catch (error) {
      console.error("Authentication error:", error);

      return false;
    }
  },
});
