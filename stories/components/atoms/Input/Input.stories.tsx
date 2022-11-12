import { Meta } from "@storybook/react";
import Input from "../../../../components/atoms/Input";

export default {
  title: "Components/Atoms/Input",
  Component: Input,
} as Meta;

const Template = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Nama Lengkap",
};
