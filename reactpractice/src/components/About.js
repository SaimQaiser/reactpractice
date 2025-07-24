import React, { useState } from 'react';

export default function About(props) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h1>About Us</h1>

      {/* Dark mode switch using App-level state */}
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="themeSwitch"
          onChange={props.toggleMode}
          checked={props.mode === 'dark'}
        />
        <label className="form-check-label" htmlFor="themeSwitch">
          {props.mode === 'dark' ? 'Dark Mode On' : 'Dark Mode Off'}
        </label>
      </div>

      <div className="accordion" id="accordionExample">
        {/* FIRST ACCORDION */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <textarea
                className="form-control"
                value={text}
                onChange={handleOnChange}
                id="mybox"
                rows="5"
              />
            </div>
          </div>
        </div>

        {/* SECOND ACCORDION */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Uppercase Preview
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <textarea
                className="form-control"
                value={text.toUpperCase()}
                readOnly
                id="mybox2"
                rows="5"
              />
            </div>
          </div>
        </div>

        {/* THIRD ACCORDION */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Reverse Preview
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                <textarea
                  className="form-control"
                  value={text.split("").reverse().join("")}
                  readOnly
                  id="mybox3"
                  rows="5"
                />
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
