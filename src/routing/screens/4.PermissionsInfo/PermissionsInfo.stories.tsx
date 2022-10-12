import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PermissionsInfo from ".";
import { HashRouter as Router } from "react-router-dom";

export default {
  title: "screens/Permissions Info",
  component: PermissionsInfo,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <PermissionsInfo />;
    </Router>
  );
};

export const Basic = Template.bind({});
