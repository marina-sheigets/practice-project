import type {
    Meta,
    StoryObj
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

type Story = StoryObj<typeof meta>;

const Template = (args: ReturnType<typeof Modal>) => (
    <Modal {...args} />
)

export const LightModal = Template.bind({})
LightModal.args = {
    children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ut?",
    isOpened: true,
}

export const DarkModal: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
DarkModal.args = {
    children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ut?",
    isOpened: true,
}


export default meta
