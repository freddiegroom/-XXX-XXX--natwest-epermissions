import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario5 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 5",
  component: Scenario5,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario5 />;
};

export const Basic = Template.bind({});
