import React, { Component } from "react";

import LinkGroup from "../../src/LinkGroup";
import LINKS_CONFIG from "./config";

import theme from "./TestTheme.css";

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
        <h1>Non-Themed Link Group</h1>
        <LinkGroup links={LINKS_CONFIG} selectionCallback={this.selected} />
        <p>The selected link id is: {this.state.selected}</p>

        <h1>Themed Link Group</h1>
        <LinkGroup
          theme={theme}
          themeCompose="merge"
          themePrefix="linkGroup-"
          links={LINKS_CONFIG}
          selectionCallback={this.selected}
        />
        <p>The selected link id is: {this.state.selected}</p>
      </div>
    );
  }
}
export default App;
