import { authClient } from "./auth-client";

export const handleGoogleLogin = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
};
