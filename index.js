import './style.css';
import { render } from './utils/render.js';
const appDiv = document.getElementById('app');
appDiv.innerHTML = `${render()}`;
