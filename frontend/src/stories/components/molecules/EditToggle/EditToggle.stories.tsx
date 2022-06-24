import { Meta, Story } from '@storybook/react/types-6-0';
import EditToggle, { IProps } from '@/molecules/EditToggle';

export default {
  title: 'molecules/EditToggle',
  component: EditToggle,
  argTypes: {
    isEditing: {
      controls: 'boolean',
    },
    disabled: {
      controls: 'boolean',
    },
    onEdit: {
      action: 'onEdit: edit button clicked',
    },
    onCancel: {
      action: 'onCancel: edit cancel button clicked',
    },
    onConfirm: {
      action: 'onConfirm: edit confirm button clicked',
    },
  },
} as Meta;

const Template:Story<IProps> = (args) => (
  <div
    style={{ width: '80px', height: '20px' }}
  >
    <EditToggle {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  isEditing: false,
  disabled: false,
};
