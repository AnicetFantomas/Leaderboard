import './style.css';
import { loadData, loadScores, getScores } from './modules/scoreUI';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AkKe5vSRElL4hhJr8Kvj/scores';
const refreshBtn = document.getElementById('refresh-btn');
const getForm = document.querySelector('.myForm');

window.addEventListener('load', () => loadScores(url))
refreshBtn.addEventListener('click',() => loadScores(url));
getForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  await getScores(url, loadData());
  loadScores(url);
  getForm.reset();
})
