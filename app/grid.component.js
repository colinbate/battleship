import {h} from 'yolk';
import styles from './grid.component.less';

const vert = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const hori = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Grid ({props}) {
  
  return (
    <div className={styles.grid}>
      {vert.reduce((prev, row) => prev.concat(hori.map(col => <div className={styles.space}>{row + col}</div>)), [])}
    </div>
  );
}
