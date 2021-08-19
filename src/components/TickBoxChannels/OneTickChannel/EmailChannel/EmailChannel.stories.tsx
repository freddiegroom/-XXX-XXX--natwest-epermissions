import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import OTEmailChannel from ".";

export default {
  title: "Components/OneTickChannel/EmailChannel",
  component: OTEmailChannel,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <OTEmailChannel />;
};

export const Basic = Template.bind({});
