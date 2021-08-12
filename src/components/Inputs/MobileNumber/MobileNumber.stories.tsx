import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import MobileNumber from ".";

export default {
  title: "Inputs/MobileNumber",
  component: MobileNumber,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <MobileNumber />;
};

export const Basic = Template.bind({});
