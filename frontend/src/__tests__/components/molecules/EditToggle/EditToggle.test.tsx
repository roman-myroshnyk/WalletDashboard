import '.../../../mocks/framer-motion';
import { render, fireEvent } from '@testing-library/react';
import EditToggle from '@/molecules/EditToggle';

describe('molecules/EditToggle', () => {
  it('EditToggle should render stale state', () => {
    const handleEdit = jest.fn();
    const handleCancel = jest.fn();
    const handleConfirm = jest.fn();

    const { container } = render(
      <EditToggle
        isEditing={false}
        disabled={false}
        onEdit={handleEdit}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('EditToggle should render editing state', () => {
    const handleEdit = jest.fn();
    const handleCancel = jest.fn();
    const handleConfirm = jest.fn();

    const { container } = render(
      <EditToggle
        isEditing
        disabled={false}
        onEdit={handleEdit}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />,
    );
    expect(container).toMatchSnapshot();
  });
  it('EditToggle all buttons must be disabled (editing state)', () => {
    const handleEdit = jest.fn();
    const handleCancel = jest.fn();
    const handleConfirm = jest.fn();

    const { getByTestId } = render(
      <EditToggle
        isEditing
        disabled
        onEdit={handleEdit}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />,
    );
    const confirmButton = getByTestId('confirmButton') as HTMLButtonElement;
    const cancelButton = getByTestId('cancelButton') as HTMLButtonElement;
    expect(confirmButton.disabled).toBeTruthy();
    expect(cancelButton.disabled).toBeTruthy();
  });
  it('EditToggle all buttons must be disabled (stale state)', () => {
    const handleEdit = jest.fn();
    const handleCancel = jest.fn();
    const handleConfirm = jest.fn();

    const { getByTestId } = render(
      <EditToggle
        isEditing={false}
        disabled
        onEdit={handleEdit}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />,
    );
    const editButton = getByTestId('editButton') as HTMLButtonElement;
    expect(editButton.disabled).toBeTruthy();
  });
  it('EditToggle onEdit should trigger (stale state)', () => {
    const handleEdit = jest.fn();
    const handleCancel = jest.fn();
    const handleConfirm = jest.fn();

    const { getByTestId } = render(
      <EditToggle
        isEditing={false}
        disabled={false}
        onEdit={handleEdit}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />,
    );
    const editButton = getByTestId('editButton') as HTMLButtonElement;
    fireEvent.click(editButton);
    expect(handleEdit).toBeCalledTimes(1);
  });
  it('EditToggle onCancel should trigger (editing state)', () => {
    const handleEdit = jest.fn();
    const handleCancel = jest.fn();
    const handleConfirm = jest.fn();

    const { getByTestId } = render(
      <EditToggle
        isEditing
        disabled={false}
        onEdit={handleEdit}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />,
    );
    const cancelButton = getByTestId('cancelButton') as HTMLButtonElement;
    fireEvent.click(cancelButton);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('EditToggle onConfirm should trigger (editing state)', () => {
    const handleEdit = jest.fn();
    const handleCancel = jest.fn();
    const handleConfirm = jest.fn();

    const { getByTestId } = render(
      <EditToggle
        isEditing
        disabled={false}
        onEdit={handleEdit}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />,
    );
    const confirmButton = getByTestId('confirmButton') as HTMLButtonElement;
    fireEvent.click(confirmButton);
    expect(handleConfirm).toBeCalledTimes(1);
  });
});
