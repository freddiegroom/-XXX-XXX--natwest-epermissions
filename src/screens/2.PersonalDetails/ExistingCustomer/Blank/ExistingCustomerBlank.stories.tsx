import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ExistingCustomerBlank from ".";

export default {
  title: "screens/Personal Details/Existing customer/Blank",
  component: ExistingCustomerBlank,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <ExistingCustomerBlank />;
};

export const Basic = Template.bind({});
