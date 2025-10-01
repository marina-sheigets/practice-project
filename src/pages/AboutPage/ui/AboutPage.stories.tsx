import type {
    Meta,
    StoryObj
} from "@storybook/react-webpack5"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import AboutPage from "./AboutPage"

const meta = {
    title: "pages/AboutPage",
    component: AboutPage,
    tags: ["autodocs"],
    argTypes: {},
    args: {}
} satisfies Meta<typeof AboutPage>


const Template = () => (
    <AboutPage />
)

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export default meta
