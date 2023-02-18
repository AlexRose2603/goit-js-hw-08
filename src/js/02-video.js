import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
var throttle = require('lodash.throttle');
const RUNNING_TIME = 'videoplayer-current-time';

const setCurrentTimeUpdate = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(RUNNING_TIME, currentTime);
};
player.on('timeupdate', throttle(setCurrentTimeUpdate, 1000));

const getCurrentTimeUpdate = localStorage.getItem(RUNNING_TIME);

if (getCurrentTimeUpdate) {
  player.setCurrentTime(getCurrentTimeUpdate);
}
