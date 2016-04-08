import {h, render} from 'yolk';
import App from './app.component';

document.addEventListener('DOMContentLoaded', () => {
  render(<App/>, document.getElementById('app'));
});
