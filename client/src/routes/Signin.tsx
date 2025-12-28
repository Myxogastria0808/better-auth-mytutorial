import type { FC } from "react";
import { authClient } from "../lib/auth";

const Signin: FC = () => {
  const handleGitHubSignin = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "http://localhost:5173/",
    });
  };
  const handleDiscordSignin = async () => {
    await authClient.signIn.social({
      provider: "discord",
      callbackURL: "http://localhost:5173/",
    });
  };

  return (
    <div>
      <h1>Signin Page</h1>
      <button onClick={handleGitHubSignin}>Sign in with GitHub</button>
      <button onClick={handleDiscordSignin}>Sign in with Discord</button>
    </div>
  );
};

export default Signin;
