import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import CountryNationality from ".";

export default {
  title: "Selects/CountryNationality",
  component: CountryNationality,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return <CountryNationality />;
};

export const Basic = Template.bind({});
