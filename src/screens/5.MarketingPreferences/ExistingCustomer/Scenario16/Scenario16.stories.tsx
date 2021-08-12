import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario16 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 16",
  component: Scenario16,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario16 />;
};

export const Basic = Template.bind({});
