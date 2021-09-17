import React, { useReducer } from 'react'
import { increment, decrement } from './ActionMethod';
import UsedReducer from './UsedReducer';

let initialState = 0;
export default function UsedReducerApp() {
    const [state, dispatch] = useReducer(UsedReducer, initialState)
    // console.log(useReducer)
    // ƒ useReducer(reducer, initialArg, init) {
    //     var dispatcher = resolveDispatcher();
    //     return dispatcher.useReducer(reducer, initialArg, init);
    //   }
    //  console.log([state, dispatch])
    //  (2) [0, ƒ]
    // console.log(UsedReducer)
    // console.log(state)

    // console.log(dispatch)
    // function dispatchAction(fiber, queue, action) {
    //     {
    //       if (typeof arguments[3] === 'function') {
    //         error("State updates from the useState() and useReducer() Hooks don't support the " + 'second callback argument. To execute a side effect after ' + 'rendering, declare it in the component body with useEffect().');
    //       }
    //     }

    return (
        <div className="container d-flex justify-content-center mt-5 ">
            <button
                href=""
                className="py-2 border px-3 bg-dark text-white text-decoration-none shadow"
                onClick={()=> dispatch(decrement())}
            >
                <span className="fw-bold fs-4">-</span>
            </button>
            <input
                name="quantity"
                type="text"
                className="py-2 border px-3 bg-light text-dark text-center shadow"
                value={state}
            />
            <button
                className="py-2 border px-3 bg-dark text-white text-decoration-none shadow"
                onClick={() => dispatch(increment())}
            >
                <span className="fw-bold fs-4">+</span>
            </button>
        </div>
    )
}
