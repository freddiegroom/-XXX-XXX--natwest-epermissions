import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario9 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 9",
  component: Scenario9,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario9 />;
};

export const Basic = Template.bind({});
