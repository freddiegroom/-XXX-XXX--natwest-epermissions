import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import MiddleName from ".";

export default {
  title: "Inputs/MiddleName",
  component: MiddleName,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <MiddleName />;
};

export const Basic = Template.bind({});
