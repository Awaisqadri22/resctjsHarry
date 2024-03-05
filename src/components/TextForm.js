import React, { useState } from "react";

export default function TextForm(props) {
  const handleChange = (event) => {
    console.log(event);
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const [text, setText] = useState();

  return (
    <>
      <div className="container">
        <div className="form-group ">
          <h1 for="exampleInputEmail1">{props.heading}</h1>
          <textarea
            onChange={handleChange}
            value={text}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            rows="4"
          />
        </div>

        <button
          style={{ marginTop: "20px" }}
          type="submit"
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Submit
        </button>
      </div>
    </>
  );
}
