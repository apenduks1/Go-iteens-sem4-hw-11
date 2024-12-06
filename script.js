//Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину. При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.
const timerOutput = document.getElementById('timer__output');
const btn = document.getElementById('btn');

let timeLeft = 60 * 60; // 1 година в секундах
let timerInterval; // Для збереження інтервалу

btn.addEventListener('click', () => {
    if (timerInterval) return; // Якщо таймер уже запущено, нічого не робимо

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Зупиняємо таймер
            alert("Час вичерпано!");
            return;
        }

        timeLeft--; // Зменшуємо час на 1 секунду
        timerOutput.textContent = `${timeLeft}`; // Оновлюємо відображення

        if (timeLeft === 1800) {
            alert("Залишилось менше половини часу.");
        }
    }, 1000); // Інтервал 1 секунда
});

//Створити таймер, який буде починати відлік з 30 секунд та зменшувати час кожну мілісекунду. При досягненні 10 секунд, таймер повинен відтворювати якусь анімацію, а при досягненні 0 секунд — виконувати певну дію, наприклад, робити кнопку почати знову активною.

const output = document.getElementById("sec")
const start__again = document.getElementById("start__again")

let secondsLeft = 30;

start__again.addEventListener("click",() => {
    for (let i = 0; i < 30; i++) {
        number = secondsLeft - i;
        console.log(1);
        
      }
output.textContent = number
})
