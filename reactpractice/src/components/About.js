import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  });

  const [btntxt, setBtnTxt] = useState(true); // true = light mode, false = dark

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnTxt(false);
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setBtnTxt(true);
    }
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h1>About Us</h1>

      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="themeSwitch"
          onChange={toggleStyle}
          checked={btntxt}
        />
        <label className="form-check-label" htmlFor="themeSwitch">
          {btntxt ? 'Dark Mode On' : 'Dark Mode Off'}
        </label>
      </div>

      <div className="accordion" id="accordionExample">
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
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item’s accordion body.</strong> It is shown by default...
            </div>
          </div>
        </div>

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
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item’s accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>

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
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item’s accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
