import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AccountDetailsBlank from ".";

export default {
  title: "screens/Account Details/Blank",
  component: AccountDetailsBlank,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <AccountDetailsBlank />;
};

export const Basic = Template.bind({});
