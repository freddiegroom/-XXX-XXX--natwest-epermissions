import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario15 from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Marketing Preferences/Existing Customers/Scenario 15",
  component: Scenario15,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Scenario15 />;
    </Router>
  );
};

export const Basic = Template.bind({});
