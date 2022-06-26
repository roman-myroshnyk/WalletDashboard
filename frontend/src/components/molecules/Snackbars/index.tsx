import { AnimatePresence } from 'framer-motion';
// app
import { useAppSelector, useAppDispatch } from '@/app/store';
import { selectDashboard, dashboardActions } from '@/app/dashboardSlice';
// components
import Snackbar from '@/atoms/Snackbar';
// styles
import styles from './Snackbars.module.scss';

const Snackbars = () => {
  const dispatch = useAppDispatch();
  const { snackbars } = useAppSelector(selectDashboard);

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <AnimatePresence initial>
          {snackbars.map((snackbar) => (
            <Snackbar
              onClose={() => dispatch(
                dashboardActions.removeSnackbar({ key: snackbar.key }),
              )}
              message={snackbar.message}
              snackbarKey={snackbar.key}
              key={snackbar.key}
            />
          ))}
        </AnimatePresence>
      </ul>
      <button
        className={styles.addButton}
        type="button"
        onClick={() => dispatch(dashboardActions.addSnackbar({ message: 'wallet id is invalid laala' }))}
      >
        +
      </button>
    </div>
  );
};

export default Snackbars;
