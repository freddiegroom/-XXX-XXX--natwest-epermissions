import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ChooseButton from ".";

export default {
  title: "Buttons/ChooseButton",
  component: ChooseButton,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <ChooseButton />;
};

export const Basic = Template.bind({});
