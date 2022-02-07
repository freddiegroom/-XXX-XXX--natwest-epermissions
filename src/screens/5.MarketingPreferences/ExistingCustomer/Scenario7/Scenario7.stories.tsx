import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario7 from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Marketing Preferences/Existing Customers/Scenario 7",
  component: Scenario7,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Scenario7 />;
    </Router>
  );
};

export const Basic = Template.bind({});
