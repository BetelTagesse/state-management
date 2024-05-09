// useReducer

import { useReducer } from "react";

const UserForm = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      first: "",
      last: "",
    }
  );

  return (
    <>
      <div>
        <input
          type="text"
          value={state.first}
          onChange={(e) => dispatch({ first: e.target.value })}
        />
        <input
          type="text"
          value={state.last}
          onChange={(e) => dispatch({ last: e.target.value })}
        />
      </div>

      <div>first:{state.first}</div>
      <div>last: {state.last}</div>
    </>
  );
};

const NameList = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "RENDER_NAMES":
          return {
            ...state,
            names: [...state.names, state.name],
            name: "",
          };
      }
    },
    {
      names: [],
      name: "",
    }
  );

  return (
    <>
      <div>
        {state.names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
        />
      </div>
      <button onClick={() => dispatch({ type: "RENDER_NAMES" })}>
        Add name
      </button>
    </>
  );
};

const UseReducer = () => {
  return (
    <div>
      <NameList />
      <UserForm />
    </div>
  );
};

export default UseReducer;
