import type {
    Meta,
    StoryObj
} from "@storybook/react-webpack5"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import Navbar, { NavbarProps } from "./Navbar";

const meta = {
    title: "widget/Navbar",
    component: Navbar,
    tags: ["autodocs"],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Navbar>

type Story = StoryObj<typeof meta>;

const Template = (args: NavbarProps) => (
    <Navbar {...args} />
)

export const Light = Template.bind({})
Light.args = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export default meta
