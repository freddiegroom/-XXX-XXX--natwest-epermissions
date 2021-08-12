import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ExistingCustomerFilled from ".";

export default {
  title: "screens/Personal Details/Existing customer/Filled",
  component: ExistingCustomerFilled,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <ExistingCustomerFilled />;
};

export const Basic = Template.bind({});
