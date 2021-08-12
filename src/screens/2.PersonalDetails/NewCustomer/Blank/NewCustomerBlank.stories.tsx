import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import NewCustomerBlank from ".";

export default {
  title: "screens/Personal Details/New customer/Blank",
  component: NewCustomerBlank,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <NewCustomerBlank />;
};

export const Basic = Template.bind({});
