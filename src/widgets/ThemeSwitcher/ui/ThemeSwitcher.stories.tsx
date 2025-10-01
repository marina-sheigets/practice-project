import type {
    Meta,
    StoryObj
} from "@storybook/react-webpack5"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import ThemeSwitcher, { ThemeSwitcherProps } from "./ThemeSwitcher"

const meta = {
    title: "shared/ThemeSwitcher",
    component: ThemeSwitcher,
    tags: ["autodocs"],
    argTypes: {},
    args: {}
} satisfies Meta<typeof ThemeSwitcher>


const Template = (args: ThemeSwitcherProps) => (
    <ThemeSwitcher {...args} />
)

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export default meta
