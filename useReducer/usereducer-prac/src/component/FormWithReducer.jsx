import React, { useReducer } from "react";

const FormWithReducer = () => {
  const initialState = {};
  const reducer = (state, action) => {
    switch(action.type === "INPUT"){
        case: 
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const submit = (e) => {
    e.target.preventDefault();
  };
  return (
    <div>
      <form action="">
        <label htmlFor="firstName">FirstName</label>
        <input type="text" name="firstName" />
        <button type="submit" onSubmit={submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormWithReducer;
