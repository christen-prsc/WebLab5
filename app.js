window.onload = function getTime(){
    let watches = document.getElementById('watch');
    let time = new Date(); //объект отвечает за работу с временем
    let hours = time.getHours(); //вернет колво часов
    let minutes = time.getMinutes(); //вернет колво минут
    let seconds = time.getSeconds(); //вернет колво секунд
    watches.innerHTML = `<h2>${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}</h2>`;
    setTimeout(getTime, 100);
}
