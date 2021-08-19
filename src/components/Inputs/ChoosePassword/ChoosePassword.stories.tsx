import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ChoosePassword from ".";

export default {
  title: "Components/Inputs/ChoosePassword",
  component: ChoosePassword,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <ChoosePassword />;
};

export const Basic = Template.bind({});
