import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AccountDetailsFilled from ".";

export default {
  title: "screens/Account Details/Filled",
  component: AccountDetailsFilled,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <AccountDetailsFilled />;
};

export const Basic = Template.bind({});
