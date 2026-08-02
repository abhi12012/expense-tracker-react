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


  if (action.type === "add") {
  return state + action.payload;
}


if (action.type === "addObject") {
  return state + action.payload.value;
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




<br />
<br />


<button
  onClick={() =>
    dispatch({ type: "reset" })
  }
>
  Reset
</button>


<br />
<br />


<button
  onClick={() =>
    dispatch({
      type: "add",
      payload: 5
    })
  }
>
  Add 5
</button>


<br />
<br />



<button
  onClick={() =>
    dispatch({
      type: "addObject",
      payload: {
        value: 10
      }
    })
  }
>
  Add Object 10
</button>
  </>
);

}

export default Counter;