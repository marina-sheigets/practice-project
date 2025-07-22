import { Route, Routes, Link } from "react-router-dom";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div>
      <Link to="/">Counter</Link>
      <Link to="/test">Test</Link>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/test" element={<div>Test</div>} />
      </Routes>
    </div>
  );
}

export default App;
