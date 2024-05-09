

// useState



import { useState } from "react";

function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState("");

  const onAddName = () => {
    setList([...list, name]);
  };
  return (
    <div>
      <ul>
        {list.map(
          (
            name // Use parentheses instead of curly braces to return JSX
          ) => (
            <li key={name}>{name}</li>
          )
        )}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>Add name</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }
  return (
    <div className=" App">
      <button onClick={addOne}>count = {count}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  );
}

export default App;
