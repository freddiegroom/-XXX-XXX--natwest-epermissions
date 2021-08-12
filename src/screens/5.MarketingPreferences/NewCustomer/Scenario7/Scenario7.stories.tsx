import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario7 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 7",
  component: Scenario7,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario7 />;
};

export const Basic = Template.bind({});
