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

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const [text, setText] = useState();

  return (
    <>
      <div className="container">
        <div className="form-group ">
          <h3 for="exampleInputEmail1">{props.heading}</h3>
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
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          To Upper Case
        </button>

        <button
          style={{ marginTop: "20px" }}
          type="submit"
          className="btn btn-primary"
          onClick={handleLoClick}
        >
          To Lower case
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>
          {" "}
          {/* {text.split(" ").length} words and {text.length} characters */}
        </p>
        <h3>Preview</h3>
        {text}
      </div>
    </>
  );
}
