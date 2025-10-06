import type {
    Meta,
} from "@storybook/react-webpack5"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { Modal } from "./Modal";

const meta = {
    title: "shared/Modal",
    component: Modal,
    tags: ["autodocs"],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Modal>

const Template = (args: ReturnType<typeof Modal>) => (
    <Modal {...args} />
)

export const LightModal = Template.bind({})
LightModal.args = {
    children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ut?",
    isOpened: true,
}

export const DarkModal = Template.bind({})
DarkModal.args = {
    children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ut?",
    isOpened: true,
}

DarkModal.decorators = [ThemeDecorator(Theme.DARK)]

export default meta
