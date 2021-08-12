import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario14 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 14",
  component: Scenario14,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario14 />;
};

export const Basic = Template.bind({});
