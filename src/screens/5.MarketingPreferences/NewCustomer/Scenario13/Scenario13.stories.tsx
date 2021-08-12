import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario13 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 13",
  component: Scenario13,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario13 />;
};

export const Basic = Template.bind({});
