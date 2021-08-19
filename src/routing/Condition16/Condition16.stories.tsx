import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition16 from ".";

export default {
  title: "Routes/Condition16",
  component: Condition16,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition16 />
    </Router>
  );
};

export const Basic = Template.bind({});
