import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario8 from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Marketing Preferences/Existing Customers/Scenario 8",
  component: Scenario8,
} as Meta;

const Template: Story = () => {
  return (
    <Router>
      <Scenario8 />;
    </Router>
  );
};

export const Basic = Template.bind({});
