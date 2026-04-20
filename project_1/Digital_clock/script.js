// document.addEventListener("DOMContentLoaded", function () {
//     const clock = document.getElementById('clock');

//     setInterval(function () {
//         const date = new Date();
//         clock.innerHTML = date.toLocaleTimeString();
//     }, 1000);
// });

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;

    document.getElementById('time').innerHTML =
      `${pad(h)}<span class="colon">:</span>${pad(m)}<span class="colon">:</span>${pad(s)}<span class="ampm">${ampm}</span>`;

    document.getElementById('sec-num').textContent = pad(s);
    document.getElementById('sec-bar').style.width = ((s / 59) * 100) + '%';

    document.getElementById('day-name').textContent = DAYS[now.getDay()];
    document.getElementById('full-date').textContent =
      `${MONTHS[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  }

  tick();
  setInterval(tick, 1000);