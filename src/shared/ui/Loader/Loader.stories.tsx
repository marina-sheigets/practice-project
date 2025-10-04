import type {
    Meta,
} from "@storybook/react-webpack5"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import Loader, { LoaderProps } from "./Loader";

const meta = {
    title: "shared/Loader",
    component: Loader,
    tags: ["autodocs"],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Loader>


const Template = (args: LoaderProps) => (
    <Loader {...args} />
)

export const LightTheme = Template.bind({})
LightTheme.args = {}

export const DarkTheme = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]

export default meta
