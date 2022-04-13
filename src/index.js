import './style.css';

const dataArr = [100, 20, 50, 78, 125, 77, 42];

for (let i = 0; i < dataArr.length; i += 1) {
    const myList = document.querySelector('.my-list');
    myList.innerHTML += `<li>Name: ${dataArr[i]}</li>`
}