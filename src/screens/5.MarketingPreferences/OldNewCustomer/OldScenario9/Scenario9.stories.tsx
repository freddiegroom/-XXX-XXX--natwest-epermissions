import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario9 from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Marketing Preferences/New Customers/Scenario 9",
  component: Scenario9,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Scenario9 />;
    </Router>
  );
};

export const Basic = Template.bind({});
