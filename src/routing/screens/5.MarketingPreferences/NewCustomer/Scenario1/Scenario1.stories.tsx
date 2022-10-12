import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario1 from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Marketing Preferences/New Customers/Scenario 1",
  component: Scenario1,
} as Meta;

const Template: Story = () => {
  return (
    <Router>
      <Scenario1 />;
    </Router>
  );
};

export const Basic = Template.bind({});
