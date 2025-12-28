// hono
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
// better-auth
import { auth, type AuthType } from "./auth.js";

// hono setup
const app = new Hono<{ Variables: AuthType }>();

// cors middleware
// the settings have to be set before mounting the handlers
app.use(
  "/api/*", // or replace with "*" to enable cors for all routes
  cors({
    origin: "http://localhost:5173", // replace with your origin
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

// mount handlers
app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

// session middleware
app.use("/api/*", async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  // session validation
  if (!session) {
    // no session, set user and session to null
    c.set("user", null);
    c.set("session", null);
    await next();
    return;
  }

  // set user and session to context
  c.set("user", session.user);
  c.set("session", session.session);
  await next();
});

// sample protected route
app.get("/api/session", (c) => {
  const session = c.get("session");
  const user = c.get("user");

  // user authentication check
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  return c.json({
    session,
    user,
  });
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
