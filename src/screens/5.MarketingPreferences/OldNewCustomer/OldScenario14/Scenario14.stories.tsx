import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario14 from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Marketing Preferences/New Customers/Scenario 14",
  component: Scenario14,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Scenario14 />;
    </Router>
  );
};

export const Basic = Template.bind({});
