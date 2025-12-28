import type { FC } from "react";
import { authClient } from "./lib/auth";

const Login: FC = () => {
  const handleLogin = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "http://localhost:5173/",
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Sign in with GitHub</button>
    </div>
  );
};

export default Login;
