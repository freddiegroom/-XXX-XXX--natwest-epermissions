import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario4 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 4",
  component: Scenario4,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario4 />;
};

export const Basic = Template.bind({});
