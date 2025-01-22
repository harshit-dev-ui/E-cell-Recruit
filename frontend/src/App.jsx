import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Grid from "./pages/Grid";
import Layout from "./pages/Layout";

function App() {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
