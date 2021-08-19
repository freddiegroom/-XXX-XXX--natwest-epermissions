import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PCExistingCustomer from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Personal Details/Existing customer",
  component: PCExistingCustomer,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <PCExistingCustomer />
    </Router>
  );
};

export const Basic = Template.bind({});
