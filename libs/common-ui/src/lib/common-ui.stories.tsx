import type { Meta, StoryObj } from '@storybook/react';
import { CommonUi } from './common-ui';

const meta: Meta<typeof CommonUi> = {
  component: CommonUi,
  title: 'CommonUi',
};
export default meta;
type Story = StoryObj<typeof CommonUi>;

export const Primary = {
  args: {},
};
