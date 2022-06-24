import { Meta, Story } from '@storybook/react/types-6-0';
import IconButton, { IProps as IIconButtonProps } from '@/atoms/IconButton';
import CancelIcon from '@/icons/CancelIcon';
import ConfirmIcon from '@/icons/ConfirmIcon';
import EditIcon from '@/icons/EditIcon';

export default {
  title: 'atoms/IconButton',
  component: IconButton,
  argTypes: {
    isShown: {
      contorols: 'boolean',
    },
    disabled: {
      controls: 'boolean',
    },
    onClick: {
      action: 'onClick: icon button clicked',
    },
  },
} as Meta;

const CancelIconButtonTemplate:Story<IIconButtonProps> = (args) => (
  <IconButton {...args}>
    <CancelIcon />
  </IconButton>
);

export const CancelIconButton = CancelIconButtonTemplate.bind({});

CancelIconButton.args = {
  isShown: true,
  disabled: false,
};

const ConfirmIconButtonTemplate:Story<IIconButtonProps> = (args) => (
  <IconButton {...args}>
    <ConfirmIcon />
  </IconButton>
);

export const ConfirmIconButton = ConfirmIconButtonTemplate.bind({});

ConfirmIconButton.args = {
  isShown: true,
  disabled: false,
};

const EditIconButtonTemplate:Story<IIconButtonProps> = (args) => (
  <IconButton {...args}>
    <EditIcon />
  </IconButton>
);

export const EditIconButton = EditIconButtonTemplate.bind({});

EditIconButton.args = {
  isShown: true,
  disabled: false,
};
