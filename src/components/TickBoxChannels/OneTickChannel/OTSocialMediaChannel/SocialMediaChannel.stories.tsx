import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import OTSocialMediaChannel from ".";

export default {
  title: "Components/OneTickChannel/SocialMediaChannel",
  component: OTSocialMediaChannel,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <OTSocialMediaChannel />;
};

export const Basic = Template.bind({});
