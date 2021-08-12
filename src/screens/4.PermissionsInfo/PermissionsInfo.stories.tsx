import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PermissionsInfo from ".";

export default {
  title: "screens/Permissions Info",
  component: PermissionsInfo,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <PermissionsInfo />;
};

export const Basic = Template.bind({});
