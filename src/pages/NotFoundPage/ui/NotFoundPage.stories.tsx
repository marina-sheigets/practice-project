import type {
    Meta,
} from "@storybook/react-webpack5"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import NotFoundPage from "./NotFoundPage"

const meta = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    tags: ["autodocs"],
    argTypes: {},
    args: {}
} satisfies Meta<typeof NotFoundPage>


const Template = () => (
    <NotFoundPage />
)

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export default meta
