import type { Meta, StoryObj } from '@storybook/react-webpack5';
import '@/app/styles/index.scss';
import { fn } from 'storybook/test';

import { Button, ButtonProps, ButtonTheme } from './Button';

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

const Template = (args: ButtonProps) => <Button {...args}></Button>;

export const Primary: StoryObj<typeof Button> = Template.bind({});
Primary.args = {
	children: 'Text',
};

export const Clear: StoryObj<typeof Button> = Template.bind({});
Clear.args = {
	theme: ButtonTheme.CLEAR,
	children: 'Text',
};

export const Outline: StoryObj<typeof Button> = Template.bind({});
Outline.args = {
	theme: ButtonTheme.OUTLINE,
	children: 'Text',
};

export default meta;
