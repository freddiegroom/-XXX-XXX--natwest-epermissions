import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import CurrentAccount from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Product Choice/Current Account",
  component: CurrentAccount,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <CurrentAccount />
    </Router>
  );
};

export const Basic = Template.bind({});
