import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition17 from ".";

export default {
  title: "Routes/Condition17",
  component: Condition17,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition17 />
    </Router>
  );
};

export const Basic = Template.bind({});
