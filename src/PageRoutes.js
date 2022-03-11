import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Pages from "./Pages/Pages";
const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/national"
        element={<Pages values={{ category: "national" }} />}
      />
      <Route
        path="/sports"
        element={<Pages values={{ category: "sports" }} />}
      />
      <Route path="/world" element={<Pages values={{ category: "world" }} />} />
      <Route
        path="/politics"
        element={<Pages values={{ category: "politics" }} />}
      />
      <Route
        path="/business"
        element={<Pages values={{ category: "business" }} />}
      />
      <Route
        path="/technology"
        element={<Pages values={{ category: "technology" }} />}
      />
    </Routes>
  );
};
export default PageRoutes;
