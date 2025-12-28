import { useEffect, useState, type FC } from "react";
import { useNavigate } from "react-router";

type SessionResponse =
  | { session: unknown; user: unknown }
  | { error: "Unauthorized" };

const Home: FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<SessionResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/api/session", {
          credentials: "include",
        });

        if (res.status === 401) {
          navigate("/signin", { replace: true });
          return;
        }

        const json = (await res.json()) as SessionResponse;
        setData(json);
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Failed to load</p>;

  return (
    <div>
      <h1>Me</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default Home;
