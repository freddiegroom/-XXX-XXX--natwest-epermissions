import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition15 from ".";

export default {
  title: "Routes/Condition15",
  component: Condition15,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition15 />
    </Router>
  );
};

export const Basic = Template.bind({});
