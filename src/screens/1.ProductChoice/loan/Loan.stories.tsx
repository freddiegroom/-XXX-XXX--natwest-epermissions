import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Loan from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Product Choice/Loan",
  component: Loan,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Loan />
    </Router>
  );
};

export const Basic = Template.bind({});
