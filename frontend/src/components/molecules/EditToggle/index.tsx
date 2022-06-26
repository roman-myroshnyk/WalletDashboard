import { FC } from 'react';
import IconButton from '@/atoms/IconButton';
import CancelIcon from '@/icons/CancelIcon';
import ConfirmIcon from '@/icons/ConfirmIcon';
import EditIcon from '@/icons/EditIcon';
import styles from './EditToggle.module.scss';

export interface IProps {
  isEditing: boolean;
  disabled: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}
const EditToggle:FC<IProps> = ({
  isEditing,
  disabled,
  onEdit,
  onCancel,
  onConfirm,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.staleWrapper}>
      <IconButton
        label="edit"
        isShown={!isEditing}
        disabled={disabled}
        onClick={onEdit}
      >
        <EditIcon
          label="edit"
          enterDelay={2}
          exitDelay={0}
        />
      </IconButton>
    </div>
    <div className={styles.editingWrapper}>
      <IconButton
        label="confirm"
        isShown={isEditing}
        disabled={disabled}
        onClick={onConfirm}
      >
        <ConfirmIcon
          label="confirm"
          enterDelay={2}
          exitDelay={0}
        />
      </IconButton>
      <IconButton
        label="cancel"
        isShown={isEditing}
        disabled={disabled}
        onClick={onCancel}
      >
        <CancelIcon
          label="cancel"
          enterDelay={1}
          exitDelay={1}
        />
      </IconButton>
    </div>
  </div>
);

export default EditToggle;
