import './deterministic-gameplay/hello';
import './ieee754';
import { configureCanvases } from './canvas';
import { configureForms } from './form';

document.addEventListener('DOMContentLoaded', () => configureCanvases());
document.addEventListener('DOMContentLoaded', () => configureForms());
