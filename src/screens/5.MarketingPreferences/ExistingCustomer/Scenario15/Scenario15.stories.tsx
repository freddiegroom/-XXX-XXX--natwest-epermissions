import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario15 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 15",
  component: Scenario15,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario15 />;
};

export const Basic = Template.bind({});
