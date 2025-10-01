import type {
    Meta,
} from "@storybook/react-webpack5"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import MainPage from "./MainPage"

const meta = {
    title: "pages/MainPage",
    component: MainPage,
    tags: ["autodocs"],
    argTypes: {},
    args: {}
} satisfies Meta<typeof MainPage>


const Template = () => (
    <MainPage />
)

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export default meta
