import { forwardRef } from 'react';
import styles from './style.model.scss';
import Magnetic from '../Magnetic';

const Header = forwardRef(function index(props, ref) {
  return (
    <div className={styles.header}>
        <Magnetic>
          <div className={styles.burger}>
            <div ref={ref} className={styles.bounds}>
              koi
            </div>
          </div>
        </Magnetic>
    </div>
  )}
)

export default Header