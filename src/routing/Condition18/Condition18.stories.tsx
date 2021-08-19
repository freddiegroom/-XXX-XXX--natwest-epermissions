import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition18 from ".";

export default {
  title: "Routes/Condition18",
  component: Condition18,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition18 />
    </Router>
  );
};

export const Basic = Template.bind({});
