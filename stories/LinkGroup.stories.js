/* eslint import/no-extraneous-dependencies: "off" */
// file: src/Button.js

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import LinkGroup from "../src/LinkGroup";

storiesOf("Link Group", module)
  .add("Basic Link Group", () => {
    const basicLinks = [
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
  .add("Links With Values", () => {
    const basicLinks = [
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
  .add("Load With Default Selection", () => {
    const basicLinks = [
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
  .add("Click Event", () => {
    const basicLinks = [
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
        <LinkGroup
          links={basicLinks}
          selectionCallback={action("link-selection")}
        />
      </div>
    );
  })
  .add("Click Event With NULL Id", () => {
    const basicLinks = [
      {
        id: null,
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
        <LinkGroup
          links={basicLinks}
          selectionCallback={action("link-selection")}
        />
      </div>
    );
  })
  .add("Click Event With Default Selection", () => {
    const basicLinks = [
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
        <LinkGroup
          links={basicLinks}
          selected={"operations"}
          selectionCallback={action("link-selection")}
        />
      </div>
    );
  });
