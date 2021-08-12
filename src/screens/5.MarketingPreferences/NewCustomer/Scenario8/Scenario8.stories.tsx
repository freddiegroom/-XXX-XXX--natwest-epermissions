import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario8 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 8",
  component: Scenario8,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario8 />;
};

export const Basic = Template.bind({});
