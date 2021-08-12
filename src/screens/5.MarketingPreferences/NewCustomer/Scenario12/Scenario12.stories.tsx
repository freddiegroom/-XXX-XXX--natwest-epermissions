import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario12 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 12",
  component: Scenario12,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario12 />;
};

export const Basic = Template.bind({});
