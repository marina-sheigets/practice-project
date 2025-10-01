import type {
    Meta,
    StoryObj
} from "@storybook/react-webpack5"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import PageError, { PageErrorProps } from "./PageError";

const meta = {
    title: "widget/PageError",
    component: PageError,
    tags: ["autodocs"],
    argTypes: {},
    args: {}
} satisfies Meta<typeof PageError>

type Story = StoryObj<typeof meta>;

const Template = (args: PageErrorProps) => (
    <PageError {...args} />
)

export const Light = Template.bind({})
Light.args = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export default meta
