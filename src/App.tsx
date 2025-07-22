import { Route, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

const CounterPage = lazy(() => import("./components/Counter/Counter"));
const TestPage = lazy(() => import("./components/Test/Test"));

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Counter</Link>
      <Link to="/test">Test</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
