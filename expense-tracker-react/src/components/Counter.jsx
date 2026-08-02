import { useReducer } from "react";

const initialState = 0;




function reducer(state, action) {

  if (action === "increment") {
    return state + 1;
  }

  if (action === "decrement") {
  return state - 1;
}


if (action === "reset") {
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
  onClick={() => dispatch("increment")}
>
  +
</button>


<br />
<br />

<button
  onClick={() => dispatch("decrement")}
>
  -
</button>


<br />
<br />


<button
  onClick={() => dispatch("reset")}
>
  Reset
</button>

  </>
);

}

export default Counter;