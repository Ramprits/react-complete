import React from "react";
import "./persone.css";

const Persone = props => {
  return (
    <div className="columns persone">
      <p className="column has-text-centered">
        {props.name} now your age is {props.age} years old!
        {props.children}
      </p>
    </div>
  );
};
export default Persone;
