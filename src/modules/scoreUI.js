const userInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const listBoard = document.getElementById('my-list');

const getAll = async (url) => (await fetch(url)).json();
const getScores = async(url, score) => (await fetch(url, score)).json();

const loadData = () => { 
    const scoresData = {
       method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body : JSON.stringify({
      user: userInput.value.trim(),
      score: scoreInput.value.trim()
    })  
  };
  return scoresData;
};

loadData();

const loadScores = async (url) => {
  const {result} = await getAll(url);
  listBoard.innerHTML = result.sort((a,b) => b.score - a.score).map((score) => `<li>${score.user}: ${score.score}</li>`).join('')
}
export {loadData, loadScores, getScores};