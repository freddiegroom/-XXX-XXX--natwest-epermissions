import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario19 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 19",
  component: Scenario19,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario19 />;
};

export const Basic = Template.bind({});
