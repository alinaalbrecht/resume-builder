import React, { useState } from "react";
import uniqid from "uniqid";
export const Header = () => {
  const [edit, setEdit] = useState(true);
  const [inputs, setInputs] = useState([
    {
      type: "text",
      id: "name",
      value: "",
      key: uniqid(),
    },
    {
      type: "email",
      id: "email",
      value: "",
      key: uniqid(),
    },
    {
      type: "tel",
      id: "phone",
      value: "",
      key: uniqid(),
    },
    {
      type: "text",
      id: "street",
      value: "",
      key: uniqid(),
    },
    {
      type: "text",
      id: "city",
      value: "",
      key: uniqid(),
    },
    {
      type: "number",
      id: "zip",
      value: "",
      key: uniqid(),
    },
    {
      type: "text",
      id: "country",
      value: "",
      key: uniqid(),
    },
  ]);

  const handleChange = (e) => {
    const index = inputs.map((input) => input.id).indexOf(e.target.id);
    let updatedInputs = [...inputs];
    updatedInputs[index].value = e.target.value;
    setInputs(updatedInputs);
  };

  const toggleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  return (
    <header className="header">
      {edit && (
        <form className="header__form">
          {inputs.map((input) => (
            <div key={input.key} className="form__input">
              <label htmlFor={input.id}>{input.id}</label>
              <input
                id={input.id}
                type={input.type}
                value={input.value}
                onChange={handleChange}
              />
            </div>
          ))}
          <button className="button--edit" onClick={toggleEdit}>
            submit
          </button>
        </form>
      )}
      {!edit && (
        <div className="header__display">
          <h1>{inputs[0].value}</h1>
          {inputs.slice(1).map((input) => (
            <p key={input.key}>{input.value}</p>
          ))}
          <button className="button--edit" onClick={toggleEdit}>
            Edit
          </button>
        </div>
      )}
    </header>
  );
};
