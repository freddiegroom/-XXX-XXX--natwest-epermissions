import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario3 from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Marketing Preferences/New Customers/Scenario 3",
  component: Scenario3,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Scenario3 />;
    </Router>
  );
};

export const Basic = Template.bind({});
