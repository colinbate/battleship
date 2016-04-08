import {h} from 'yolk';
import styles from './app.component.less';
import Landing from './landing.component';
import Grid from './grid.component';

export default function App () {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.logotype}>Battleship!</h1>
      </header>
      <main>
        <Landing/>
        <Grid/>
      </main>
    </div>
  );
}
