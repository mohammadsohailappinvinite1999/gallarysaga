import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Counter from "./Counter";

function App() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "HELLO" });
  }, []);

  return (
    <div className="App">
      {/* <Counter
        value={state}
        onIncrement={() => {
          dispatch({ type: "INCREMENT" });
        }}
        onDecrement={() => {
          dispatch({ type: "DECREMENT" });
        }}
        onIncrementAsync={() => {
          dispatch({ type: "INCREMENT_ASYNC" });
        }}
      /> */}

      <Header />
      <ImageGrid />
    </div>
  );
}

export default App;
