import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition6 from ".";

export default {
  title: "Routes/Condition6",
  component: Condition6,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition6 />
    </Router>
  );
};

export const Basic = Template.bind({});
