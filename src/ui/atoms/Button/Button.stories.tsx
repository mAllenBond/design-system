import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta = {
  argTypes: {
    color: {
      control: {
        options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
        type: 'select',
      },
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: {
        options: ['small', 'medium', 'large'],
        type: 'select',
      },
    },
    variant: {
      control: {
        options: ['text', 'outlined', 'contained'],
        type: 'select',
      },
    },
  },
  component: Button,
  title: 'MUI/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Text: Story = {
  args: {
    name: 'Button',
    title: 'Button',
    variant: 'text',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Contained: Story = {
  args: {
    variant: 'contained',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
