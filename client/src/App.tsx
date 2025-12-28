import type { FC } from "react";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import Login from "./routes/Login";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default App;
