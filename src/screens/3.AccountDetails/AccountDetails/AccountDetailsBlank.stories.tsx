import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AccountDetails from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Account Details",
  component: AccountDetails,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <AccountDetails />
    </Router>
  );
};

export const Basic = Template.bind({});
