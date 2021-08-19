import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario18 from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Marketing Preferences/Existing Customers/Scenario 18",
  component: Scenario18,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Scenario18 />;
    </Router>
  );
};

export const Basic = Template.bind({});
