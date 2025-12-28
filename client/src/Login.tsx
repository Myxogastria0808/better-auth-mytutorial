import type { FC } from "react";
import { authClient } from "./lib/auth";

const Login: FC = () => {
  const handleGitHubLogin = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "http://localhost:5173/",
    });
  };
  const handleDiscordLogin = async () => {
    await authClient.signIn.social({
      provider: "discord",
      callbackURL: "http://localhost:5173/",
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleGitHubLogin}>Sign in with GitHub</button>
      <button onClick={handleDiscordLogin}>Sign in with Discord</button>
    </div>
  );
};

export default Login;
