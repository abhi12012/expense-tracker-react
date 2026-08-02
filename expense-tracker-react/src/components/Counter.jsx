import { useReducer } from "react";

const initialState = 0;
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";




function reducer(state, action) {

  switch(action.type) {

    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return initialState;

    case "add":
      return state + action.payload;

    case "addObject":
      return state + action.payload.value;

    default:
      return state;

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
  onClick={() =>
   dispatch({ type: INCREMENT })
  }
>
  +
</button>


<br />
<br />

<button
  onClick={() =>
   dispatch({ type: DECREMENT })
  }
>
  -
</button>


<br />
<br />





<button
  onClick={() =>
   dispatch({ type: RESET })
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