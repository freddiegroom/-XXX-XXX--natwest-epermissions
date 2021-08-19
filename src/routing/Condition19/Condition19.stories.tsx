import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition19 from ".";

export default {
  title: "Routes/Condition19",
  component: Condition19,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition19 />
    </Router>
  );
};

export const Basic = Template.bind({});
