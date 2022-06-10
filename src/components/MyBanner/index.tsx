import React from "react";
import './index.scss';

const MyBanner = (): JSX.Element => {
  return (
    <div className="main-container">
      <div className="main-container__content"></div>
      <div className="sign">
        <span className="sign__word">
          <h1>Aamir Iqubal </h1>
        </span>
      </div>
    </div>
  );
};

export default MyBanner;