import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Address from ".";

export default {
  title: "Selects/Address",
  component: Address,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Address />;
};

export const Basic = Template.bind({});
