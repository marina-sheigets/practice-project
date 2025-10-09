import type {
    Meta,
} from "@storybook/react-webpack5"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { Input, InputProps } from "./Input"

const meta = {
    title: "shared/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {},
    args: {
    }
} satisfies Meta<typeof Input>

const Template = (args: InputProps) => (
    <Input {...args} />
)

export const LightInput = Template.bind({})
LightInput.args = {
    autofocus: true,
    placeholder: 'Enter text',
}

export const DarkInput = Template.bind({})
DarkInput.args = {
    autofocus: true,
    placeholder: 'Enter text',
}

DarkInput.decorators = [ThemeDecorator(Theme.DARK)]

export default meta
