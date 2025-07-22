import React, { useState } from "react";
import * as styles from "./Counter.module.scss";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
