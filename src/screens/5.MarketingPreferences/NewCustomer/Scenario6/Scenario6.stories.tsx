import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario6 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 6",
  component: Scenario6,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario6 />;
};

export const Basic = Template.bind({});
