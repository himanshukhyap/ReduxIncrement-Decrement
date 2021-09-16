import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Datafilter from './Datafilter';

import { useSelector, useDispatch } from "react-redux";
import { Decriment, increment } from "./Action/Action";

function App() {
  const mystate = useSelector((state) => state.changethenumbe);
  const dispatch = useDispatch();
  return (
    <div className="container d-flex justify-content-center mt-5">
      <button
        href=""
        className="py-2 border px-3 bg-dark text-white text-decoration-none"
        onClick={() => dispatch(Decriment())}
      >
        <span className="fw-bold fs-4">-</span>
      </button>
      <input
        name="quantity"
        type="text"
        className="py-2 border px-3 bg-light text-dark text-center"
        value={mystate}
      />
      <button
        className="py-2 border px-3 bg-dark text-white text-decoration-none"
        onClick={() => dispatch(increment())}
      >
        <span className="fw-bold fs-4">+</span>
      </button>
    </div>
  );
}

export default App;
