import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Postcode from ".";

export default {
  title: "Components/Inputs/Postcode",
  component: Postcode,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Postcode />;
};

export const Basic = Template.bind({});
