import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import DOB from ".";

export default {
  title: "Components/Multiple Inputs/DOB",
  component: DOB,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <DOB />;
};

export const Basic = Template.bind({});
