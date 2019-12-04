import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppMK2 from "./AppMK2";
import * as serviceWorker from "./serviceWorker";

/**
 * Basic implementation of a calendar.
 * Conflict sorter between dates already scheduled and invites to events that are not (yet).
 */

ReactDOM.render(<AppMK2 />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
