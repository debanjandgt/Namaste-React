import React from "react";
import ReactDOM from "react-dom/client";


const head1=React.createElement("h1",{},"I am Debanjan");
const head2=React.createElement("h2",{},"Competitive Programmer | Software Developer");
const container = React.createElement("div",{},[head1,head2]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
