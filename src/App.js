import React from "react";
import TheLayout from "./pages/TheLayout";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <TheLayout />
    </>
  );
}

export default App;
