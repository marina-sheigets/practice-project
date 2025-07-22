import { Link } from "react-router-dom";
import "@/app/styles/index.scss";
import { useTheme } from "@/app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Counter</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  );
}

export default App;
