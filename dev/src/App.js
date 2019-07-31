import React, { Component } from "react";
import LinkGroup from "../../src/LinkGroup";

let links = [
  {
    id: "_CLEAR_",
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

class App extends Component {
  constructor(props) {
    super(props);
    this.selected = this.selected.bind(this);

    this.state = {
      selected: undefined
    };
  }

  selected(id) {
    this.setState({
      selected: id
    });
  }

  render() {
    return (
      <div>
        <LinkGroup links={links} selectionCallback={this.selected} />
        <hr />
        <p>The selected link id is: {this.state.selected}</p>
      </div>
    );
  }
}
export default App;
