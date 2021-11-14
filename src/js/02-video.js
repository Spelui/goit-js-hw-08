import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const progresBar = document.querySelector('iframe');

//progresBar.addEventListener('input', valuePlayBar);

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const LAST_POINT = 'videoplayer-current-time';

const savedPoint = localStorage.getItem(LAST_POINT);

player.setCurrentTime(savedPoint);

player.on('timeupdate', throttle(savePointToStorage, 1000));

function savePointToStorage(evt) {
  localStorage.setItem(LAST_POINT, evt.seconds);
}

// console.log(localStorage.getItem(lastPint));
