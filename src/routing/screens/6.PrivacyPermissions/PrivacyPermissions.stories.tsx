import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PrivacyPermissions from ".";

export default {
  title: "screens/Privacy Permissions",
  component: PrivacyPermissions,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <PrivacyPermissions />;
};

export const Basic = Template.bind({});
