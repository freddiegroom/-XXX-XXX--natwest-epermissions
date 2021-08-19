import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LastName from ".";

export default {
  title: "Components/Inputs/LastName",
  component: LastName,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <LastName />;
};

export const Basic = Template.bind({});
