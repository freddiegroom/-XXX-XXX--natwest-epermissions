import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import CurrentAccount from ".";

export default {
  title: "screens/Product Choice/Current Account",
  component: CurrentAccount,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <CurrentAccount />;
};

export const Basic = Template.bind({});
