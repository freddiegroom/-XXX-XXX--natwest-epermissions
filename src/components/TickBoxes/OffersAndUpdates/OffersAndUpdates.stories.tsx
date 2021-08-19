import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import OffersAndUpdates from ".";

export default {
  title: "Components/OffersAndUpdates",
  component: OffersAndUpdates,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <OffersAndUpdates />;
};

export const Basic = Template.bind({});
