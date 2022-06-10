import React from "react";
import MyBanner from "./components/MyBanner";

const App = (): JSX.Element => {
  return (
    <div className="main-container">
      <MyBanner />
      {/** Uncomment below JSX and run test to see the magic */}
      {/* <button>Check if WOW</button> */}
    </div>
  );
};

export default App;
