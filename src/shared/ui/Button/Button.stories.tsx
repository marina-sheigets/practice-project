import type { Meta, StoryObj } from '@storybook/react-webpack5';

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
	color: 'primary',
	theme: ButtonTheme.CLEAR,
	children: 'Text',
};

export default meta;
