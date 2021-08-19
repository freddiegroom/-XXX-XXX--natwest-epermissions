import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PCNewCustomer from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Personal Details/New customer",
  component: PCNewCustomer,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <PCNewCustomer />
    </Router>
  );
};

export const Basic = Template.bind({});
