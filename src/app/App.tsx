import { Routes, Link } from "react-router-dom";
import { Suspense } from "react";
import "@/app/styles/index.scss";
import { useTheme } from "@/app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "@/shared/lib/classNames/classNames";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Counter</Link>
      <Link to="/test">Test</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes></Routes>
      </Suspense>
    </div>
  );
}

export default App;
