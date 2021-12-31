


const addProgressBar = () => {
const element = document.createElement('div');
element.id = 'progress-container';
element.innerHTML = '<div id="progress-bar">jahahahaha</div>';

document.body.appendChild(element);
};

console.log(window.outerHeight);
const readingProgress = target => {

const winTop = window.pageYOffset || document.documentElement.scrollTop;
const targetBottom = target.offsetTop + target.scrollHeight;
const windowBottom = winTop + window.outerHeight;
const progress = 100 - (((targetBottom - windowBottom + window.outerHeight / 3) / (targetBottom - window.outerHeight + window.outerHeight / 3)) * 100);

document.querySelector('#progress-bar').style.width = progress + '%';

(progress > 100) ? console.log(document.querySelector('#progress-container').classList.add('ready')) : console.log(document.querySelector('#progress-container').classList.remove('ready'));
};


document.addEventListener('DOMContentLoaded', () => {
const content = document.querySelector('#content');
addProgressBar();
readingProgress(content);
window.addEventListener('scroll', () => {
readingProgress(content);
});
});
