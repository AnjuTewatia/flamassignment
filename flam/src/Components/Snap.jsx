import React from "react";
import "./Style.css";

const Snap = ({ height, close }) => {
  return (
    // data which is seen on the diffrent screens
    <div className="sheet" style={{ height: `${height}px` }}>
      <div className="sheet1"></div>
      <div className="sheet2">
        <h1> React sheet </h1>
        <h4>
          Built on top of react-spring and react-use-gesture, following best
          practices for minimal rerenders and only animating CSS properties that
          can be done on the GPU when possible.
        </h4>
        <p>
          Can be used like a blocking dialog that require the user to make a
          choice before it can be closed, or like floating bottom panel. It
          automatically adapts to the dimensions of the content you put in it.
        </p>
      </div>
      {/*  sheet close  */}
      {height !== null && (
        <button
          className="button"
          onClick={close}
          style={{
            gap: "10px",
            marginRight: "20px",
            padding: "15px",
            fontSize: "20px",
            backgroundColor: "red",
            cursor: "pointer",
          }}
        >
          {" "}
          Close the sheet
        </button>
      )}
    </div>
  );
};

export default Snap;
