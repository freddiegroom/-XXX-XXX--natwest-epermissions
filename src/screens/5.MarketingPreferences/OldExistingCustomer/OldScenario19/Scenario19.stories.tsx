import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario19 from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Marketing Preferences/Existing Customers/Scenario 19",
  component: Scenario19,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Scenario19 />;
    </Router>
  );
};

export const Basic = Template.bind({});
