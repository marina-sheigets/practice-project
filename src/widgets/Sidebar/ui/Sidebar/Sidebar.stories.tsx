import type {
    Meta,
    StoryObj
} from "@storybook/react-webpack5"

import { Sidebar, SidebarProps } from "./Sidebar"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

const meta = {
    title: "widget/Sidebar",
    component: Sidebar,
    tags: ["autodocs"],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Sidebar>

type Story = StoryObj<typeof meta>;

const Template = (args: SidebarProps) => (
    <Sidebar {...args} />
)

export const Light = Template.bind({})
Light.args = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export default meta
