import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario2 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 2",
  component: Scenario2,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario2 />;
};

export const Basic = Template.bind({});
