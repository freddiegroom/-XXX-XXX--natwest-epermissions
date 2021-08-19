import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition8 from ".";

export default {
  title: "Routes/Condition8",
  component: Condition8,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition8 />
    </Router>
  );
};

export const Basic = Template.bind({});
