import { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {

  if (action === "increment") {
    return state + 1;
  }

}





function Counter() {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

 return (
  <>
    <h1>{state}</h1>

    <button
  onClick={() => dispatch("increment")}
>
  +
</button>
  </>
);

}

export default Counter;