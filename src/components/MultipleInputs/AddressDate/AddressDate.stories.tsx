import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AddressDate from ".";

export default {
  title: "Components/Multiple Inputs/AddressDate",
  component: AddressDate,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <AddressDate />;
};

export const Basic = Template.bind({});
