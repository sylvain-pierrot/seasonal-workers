import { useContext, useMemo } from "react";
import { AuthContext } from "../providers/KeycloakProvider";

// This hook can be used to access the user info.
export function useKeycloak() {
  const { signIn, signOut, isLoading, isLoggedIn, tokens } =
    useContext(AuthContext);

  return useMemo(
    () => ({
      signIn,
      signOut,
      isLoading,
      isLoggedIn,
      token: tokens?.accessToken ?? null,
    }),
    [isLoading, tokens]
  );
}
