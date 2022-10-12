import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition10 from ".";

export default {
  title: "Routes/Condition10",
  component: Condition10,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition10 />
    </Router>
  );
};

export const Basic = Template.bind({});
