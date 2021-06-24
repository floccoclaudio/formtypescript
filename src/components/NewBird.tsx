import React from "react";

const NewBird = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { name, age } = e.target.value;
  };

  return (
    <form onSubmit={e => onSubmitHandler}>
      <label htmlFor="name">Name : </label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="age">Age : </label>
      <input type="text" id="age" name="age" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewBird;
