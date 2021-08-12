import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario11 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 11",
  component: Scenario11,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario11 />;
};

export const Basic = Template.bind({});
