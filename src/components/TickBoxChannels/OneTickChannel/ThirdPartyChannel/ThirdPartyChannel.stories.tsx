import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ThirdPartyChannel from ".";

export default {
  title: "Components/OneTickChannel/ThirdPartyChannel",
  component: ThirdPartyChannel,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <ThirdPartyChannel />;
};

export const Basic = Template.bind({});
