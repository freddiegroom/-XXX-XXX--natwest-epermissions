import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import OtherNewsChannel from ".";

export default {
  title: "Components/OneTickChannel/OtherNewsChannel",
  component: OtherNewsChannel,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <OtherNewsChannel />;
};

export const Basic = Template.bind({});
