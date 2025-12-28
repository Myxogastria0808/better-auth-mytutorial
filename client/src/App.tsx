import type { FC } from "react";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Link from "./routes/Link";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/link" element={<Link />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default App;
