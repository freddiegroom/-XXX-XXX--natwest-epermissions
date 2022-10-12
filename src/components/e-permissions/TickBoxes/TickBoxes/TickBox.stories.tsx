import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import TickBoxes from ".";

export default {
  title: "Components/Tick Boxes/TickBoxes",
  component: TickBoxes,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <TickBoxes />;
};

export const Basic = Template.bind({});
