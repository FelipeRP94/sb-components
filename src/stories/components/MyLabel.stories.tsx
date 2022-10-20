import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  label: "Test",
  size: "h1",
  allCaps: false,
};

export const AllCaps = Template.bind({});

AllCaps.args = {
  label: "Test",
  size: "h1",
  allCaps: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Test",
  size: "h1",
  color: "secondary",
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  label: "Test",
  size: "h1",
  color: "tertiary",
};

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
  size: "h1",
  fontColor: "#001100",
};
