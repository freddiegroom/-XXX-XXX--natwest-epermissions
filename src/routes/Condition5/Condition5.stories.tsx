import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition5 from ".";

export default {
  title: "Routes/Condition5",
  component: Condition5,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition5 />
    </Router>
  );
};

export const Basic = Template.bind({});
