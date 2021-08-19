import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ConfirmPIN from ".";

export default {
  title: "Components/Inputs/ConfirmPIN",
  component: ConfirmPIN,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <ConfirmPIN />;
};

export const Basic = Template.bind({});
