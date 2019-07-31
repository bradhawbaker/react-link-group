import React from "react";
import ReactDOM from "react-dom";

import LinkGroup from "../../src/LinkGroup";

let links = [
  {
    id: "services",
    displayName: "Services",
    value: 6
  },
  {
    id: "operations",
    displayName: "Operations",
    value: 9
  },
  {
    id: "resources",
    displayName: "Resources",
    value: 2
  }
];

function selected(id) {
  alert(`link group has a selection: ${id}`);
}

ReactDOM.render(
  <LinkGroup
    links={links}
    selected="operations"
    selectionCallback={selected}
  />,
  document.getElementById("app")
);
