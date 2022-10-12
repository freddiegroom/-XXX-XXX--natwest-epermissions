import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition4 from ".";

export default {
  title: "Routes/Condition5",
  component: Condition4,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition4 />
    </Router>
  );
};

export const Basic = Template.bind({});
