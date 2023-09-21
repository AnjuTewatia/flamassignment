import React, { useState } from "react";
import Snap from "./Snap";
import "../App.css";

import "./Style.css";

const Home = () => {
  const [data, setData] = useState(null);

  const openSheetfull = () => {
    setData(570);
  };
  const openSheethalf = () => {
    setData(250);
  };
  const small = () => {
    setData(150);
  };
  const close = () => {
    setData(null);
  };
  const handleClose = () => {
    setData(null);
  };
  return (
    <>
      <div>
        {/* Close the sheet
         */}
        <div
          id="basic-menu"
          data={data}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "15rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close smallclose"
              onClick={handleClose}
              style={{
                position: "absolute",
                fontSize: 23,
                cursor: "pointer",
              }}
            ></i>
          </div>
        </div>
        <h1 className="heading"> React Spring Bottom Sheet </h1>
        {/*  full screen button  */}
        <button
          onClick={openSheetfull}
          style={{
            gap: "10px",
            marginRight: "20px",
            padding: "10px",
            fontSize: "20px",
            marginBottom: "7px",
          }}
        >
          {" "}
          Open Full Screen Sheet
        </button>
        {/* medium screen button */}
        <button
          onClick={openSheethalf}
          style={{
            gap: "10px",
            marginRight: "20px",
            padding: "10px",
            fontSize: "20px",
            marginBottom: "7px",
          }}
        >
          Open Half Screen Sheet
        </button>
        {/* small screen */}
        <button
          onClick={small}
          style={{
            gap: "10px",
            marginRight: "20px",
            padding: "10px",
            fontSize: "20px",
            marginBottom: "7px",
          }}
        >
          Open small Screen Sheet
        </button>

        {data !== null && <Snap height={data} close={close} />}
      </div>
    </>
  );
};

export default Home;
