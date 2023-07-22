import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar.js';

const meta: Meta = {
  title: 'Blueprint/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
