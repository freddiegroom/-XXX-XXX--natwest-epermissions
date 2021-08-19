import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition14 from ".";

export default {
  title: "Routes/Condition14",
  component: Condition14,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition14 />
    </Router>
  );
};

export const Basic = Template.bind({});