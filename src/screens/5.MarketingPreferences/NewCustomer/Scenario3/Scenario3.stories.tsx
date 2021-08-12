import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario3 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 3",
  component: Scenario3,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario3 />;
};

export const Basic = Template.bind({});
