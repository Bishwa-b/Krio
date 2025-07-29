import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

// Lazy load your pages
const Home = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Ambassador = lazy(() => import("./pages/Ambassador"));
const Formula = lazy(() => import("./pages/Formula"));
const Science = lazy(() => import("./pages/Science"));

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/ambassador" element={<Ambassador />} />
        <Route path="/formula" element={<Formula />} />
        <Route path="/science" element={<Science />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
