import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario13 from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Marketing Preferences/New Customers/Scenario 13",
  component: Scenario13,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Scenario13 />;
    </Router>
  );
};

export const Basic = Template.bind({});
