// useEffect;

import { useState, useEffect } from "react";

const UseEffect = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((res) => res.json())
      .then((data) => setNames(data));
  }, []);
  return <div>Names: {names.join(",")}</div>;
};

export default UseEffect;
