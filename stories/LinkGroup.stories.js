// file: src/Button.js

import React from "react";
import { storiesOf } from "@storybook/react";

import LinkGroup from "../src/LinkGroup";

storiesOf("Link Group", module)
  .add("Basic Link Group", () => {
    let basicLinks = [
      {
        id: "all",
        displayName: "All"
      },
      {
        id: "services",
        displayName: "Services"
      },
      {
        id: "operations",
        displayName: "Operations"
      },
      {
        id: "resources",
        displayName: "Resources"
      }
    ];

    return (
      <div style={{ height: "100%" }}>
        <LinkGroup links={basicLinks} />
      </div>
    );
  })
  .add("Default Selection", () => {
    let basicLinks = [
      {
        id: "all",
        displayName: "All"
      },
      {
        id: "services",
        displayName: "Services"
      },
      {
        id: "operations",
        displayName: "Operations"
      },
      {
        id: "resources",
        displayName: "Resources"
      }
    ];

    return (
      <div style={{ height: "100%" }}>
        <LinkGroup links={basicLinks} selected="operations" />
      </div>
    );
  })
  .add("Links With Values", () => {
    let basicLinks = [
      {
        id: "all",
        displayName: "All"
      },
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

    return (
      <div style={{ height: "100%" }}>
        <LinkGroup links={basicLinks} />
      </div>
    );
  })
  .add("Click Link Event Handling", () => {
    let basicLinks = [
      {
        id: "all",
        displayName: "All"
      },
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

    function linkSelected(id) {
      alert(`Selected link id: ${id}`);
    }

    return (
      <div style={{ height: "100%" }}>
        <p>Click a link below:</p>
        <LinkGroup links={basicLinks} selectionCallback={linkSelected} />
      </div>
    );
  });
