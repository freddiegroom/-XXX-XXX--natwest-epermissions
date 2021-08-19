import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import OTTextMessageChannel from ".";

export default {
  title: "Components/OneTickChannel/TextMessageChannel",
  component: OTTextMessageChannel,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <OTTextMessageChannel />;
};

export const Basic = Template.bind({});
