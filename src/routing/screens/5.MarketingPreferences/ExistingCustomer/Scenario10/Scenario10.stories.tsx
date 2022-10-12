import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario10 from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Marketing Preferences/Existing Customers/Scenario 10",
  component: Scenario10,
} as Meta;

const Template: Story = () => {
  return (
    <Router>
      <Scenario10 />;
    </Router>
  );
};

export const Basic = Template.bind({});
