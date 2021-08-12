import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import NewCustomerFilled from ".";

export default {
  title: "screens/Personal Details/New customer/Filled",
  component: NewCustomerFilled,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <NewCustomerFilled />;
};

export const Basic = Template.bind({});
