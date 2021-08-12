import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario1 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 1",
  component: Scenario1,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario1 />;
};

export const Basic = Template.bind({});
