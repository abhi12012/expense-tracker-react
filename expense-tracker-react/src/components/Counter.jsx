import { useReducer } from "react";

const initialState = 0;




function reducer(state, action) {

  if (action.type === "increment") {
    return state + 1;
  }

  if (action.type === "decrement") {
    return state - 1;
  }

  if (action.type === "reset") {
    return initialState;
  }

  return state;
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
  onClick={() =>
    dispatch({ type: "increment" })
  }
>
  +
</button>


<br />
<br />

<button
  onClick={() =>
    dispatch({ type: "decrement" })
  }
>
  -
</button>

<br />
<br />


<button
  onClick={() =>
    dispatch({ type: "reset" })
  }
>
  Reset
</button>
  </>
);

}

export default Counter;