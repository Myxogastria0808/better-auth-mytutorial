import type { FC } from "react";
import { authClient } from "../lib/auth";

const Link: FC = () => {
  const handleGitHubLinkSocial = async () => {
    await authClient.linkSocial({
      provider: "github",
      callbackURL: "http://localhost:5173/",
    });
  };
  const handleDiscordLinkSocial = async () => {
    await authClient.linkSocial({
      provider: "discord",
      callbackURL: "http://localhost:5173/",
    });
  };
  const handleGoogleLinkSocial = async () => {
    await authClient.linkSocial({
      provider: "google",
      callbackURL: "http://localhost:5173/",
    });
  };

  return (
    <div>
      <h1>Link Page</h1>
      <button onClick={handleGitHubLinkSocial}>Link GitHub</button>
      <button onClick={handleDiscordLinkSocial}>Link Discord</button>
      <button onClick={handleGoogleLinkSocial}>Link Google</button>
    </div>
  );
};

export default Link;
