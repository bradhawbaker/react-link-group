import { configure } from "@storybook/react";

// find all stories under the 'stories' dir
const req = require.context("../stories", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
