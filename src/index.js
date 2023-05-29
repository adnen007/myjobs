import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MenuContext } from "./contexts/menuContext";
import { MainContext } from "./contexts/mainContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MenuContext>
      <MainContext>
        <App />
        <ToastContainer />
      </MainContext>
    </MenuContext>
  </BrowserRouter>
);

//next add in the steps on building react website the steps like
// 1- point out the pages and the component form the design
// 2- create the pages and the components and do the routing. to the pages
// 3- do the routing
// 4- start to write the jsx and make sure to see the mobile and the desktop
//version inculde all the elment that go to css and start by the mobile version

//create the menu and do the css in mobile than in the desktop.

// in css module you can use a global class by :global(classname).
//and i think it is good practice to keep the component father with a global class so i can
//use another component from other places and change thim depend on that class
