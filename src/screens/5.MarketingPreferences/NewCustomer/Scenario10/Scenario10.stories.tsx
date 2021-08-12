import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Scenario10 from ".";

export default {
  title: "screens/Marketing Preferences/Scenario 10",
  component: Scenario10,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <Scenario10 />;
};

export const Basic = Template.bind({});
