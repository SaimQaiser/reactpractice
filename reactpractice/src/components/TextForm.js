import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleUsClick = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  // Word count excluding empty strings
  const wordCount = text.trim().split(/\s+/).filter((word) => word.length > 0).length;

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            onChange={handleOnChange}
            id="mybox"
            rows="10"
          ></textarea>

        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button
          className="btn mx-2"
          style={{ backgroundColor: '#a76528ff', color: 'white' }}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn mx-2"
          style={{ backgroundColor: '#581b99ff', color: 'white' }}
          onClick={handleUsClick}
        >
          Reverse Text
        </button>
      </div>

      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{(0.008 * wordCount).toFixed(2)} minutes to read</p>
      </div>
    </>
  );
}
