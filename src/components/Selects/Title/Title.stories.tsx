import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Title from ".";

export default {
  title: "Selects/Title",
  component: Title,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Title />;
};

export const Basic = Template.bind({});
