import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario17 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 17",
  component: Scenario17,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario17 />;
};

export const Basic = Template.bind({});
