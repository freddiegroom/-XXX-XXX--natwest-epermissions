import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario18 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 18",
  component: Scenario18,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario18 />;
};

export const Basic = Template.bind({});
