import type {
    Meta,
    StoryObj
} from "@storybook/react-webpack5"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { AppLink, AppLinkProps, AppLinkTheme } from "./AppLink";

const meta = {
    title: "shared/AppLink",
    component: AppLink,
    tags: ["autodocs"],
    argTypes: {},
    args: {
        to: "/"
    }
} satisfies Meta<typeof AppLink>

type Story = StoryObj<typeof meta>;

const Template = (args: AppLinkProps) => (
    <AppLink {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
    children: "Link",
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY,
    children: "Link",
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]


export const Secondary = Template.bind({})
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
    children: "Link",
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    theme: AppLinkTheme.SECONDARY,
    children: "Link",
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export default meta
