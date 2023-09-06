import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//React v18
//In strict mode, components are rendered twice, so as to check if there is any errors
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before v18
// ReactDOM.render(<App />, document.getElementById("root"));
