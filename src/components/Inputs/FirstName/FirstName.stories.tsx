import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import FirstName from ".";

export default {
  title: "Inputs/FirstName",
  component: FirstName,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <FirstName />;
};

export const Basic = Template.bind({});
