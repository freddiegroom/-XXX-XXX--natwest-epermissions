import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import TickBox from ".";

export default {
  title: "Components/Tick Boxes/TickBox",
  component: TickBox,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <TickBox />;
};

export const Basic = Template.bind({});
