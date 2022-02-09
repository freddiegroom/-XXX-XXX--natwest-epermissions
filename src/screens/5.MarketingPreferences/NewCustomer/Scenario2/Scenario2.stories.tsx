import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario2 from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Marketing Preferences/New Customers/Scenario 2",
  component: Scenario2,
} as Meta;

const Template: Story = () => {
  return (
    <Router>
      <Scenario2 />;
    </Router>
  );
};

export const Basic = Template.bind({});
