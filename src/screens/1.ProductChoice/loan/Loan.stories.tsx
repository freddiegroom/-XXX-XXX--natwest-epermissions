import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Loan from ".";

export default {
  title: "screens/Product Choice/Loan",
  component: Loan,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Loan />;
};

export const Basic = Template.bind({});
