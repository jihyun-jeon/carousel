import './reset.css';
import './style.css';

/*
// [클래스 하기 전 carousel]
let posX = 0;
const unitWidth = 80;
const wrapperEl = document.querySelector('.wrapper');
const prevBtnEl = document.querySelector('.prevBtn');
const nextBtnEl = document.querySelector('.nextBtn');

prevBtnEl.addEventListener('click', () => {
  posX += unitWidth;

  if (posX > 0) {
    posX = -320;
  }

  wrapperEl.style.transform = `translateX(${posX}px)`;
});

nextBtnEl.addEventListener('click', () => {
  posX -= unitWidth;

  if (posX < -320) {
    posX = 0;
  }

  wrapperEl.style.transform = `translateX(${posX}px)`;
});
*/

// [클래스화 하기]
function Carousel(selector) {
  this.root = document.querySelector(selector);
  this.init();
  this.bindEvent();
}

// 1.초기세팅
Carousel.prototype.init = function () {
  // wrapper div를 만듦
  const wrapperEl = document.createElement('div');
  wrapperEl.classList.add('wrapper');
  // viewport div를 만듦
  const viewportEl = document.createElement('div');
  viewportEl.classList.add('viewport');

  // panel div들을 wrapper의 자식으로 설정
  const panels = this.root.querySelectorAll('.panel'); // 유사배열(node list로 나옴)
  wrapperEl.prepend(...panels);
  viewportEl.prepend(wrapperEl);
  this.root.prepend(viewportEl);

  // control div에 button를 생성하여 젤 밑에 넣어 줌
  const ctlEl = document.createElement('div');
  ctlEl.classList.add('control');

  const prevBtnEl = document.createElement('button');
  prevBtnEl.classList.add('prevBtn');
  prevBtnEl.innerHTML = '&lt';

  const nextBtnEl = document.createElement('button');
  nextBtnEl.classList.add('nextBtn');
  nextBtnEl.innerHTML = '&gt';

  ctlEl.append(prevBtnEl, nextBtnEl);
  this.root.append(ctlEl);
};

// 2.버튼에 이벤트 걸기
Carousel.prototype.bindEvent = function () {
  const wrapperEl = this.root.querySelector('.wrapper');
  const nextBtnEl = this.root.querySelector('.nextBtn');
  const prevBtnEl = this.root.querySelector('.prevBtn');
  const panels = this.root.querySelectorAll('.panel');
  const maxPosX = -80 * (panels.length - 1); // -320, -160
  let posX = 0;

  nextBtnEl.addEventListener('click', () => {
    posX -= 80;

    if (posX < maxPosX) {
      posX = 0;
    }
    wrapperEl.style.transform = `translateX(${posX}px)`;
  });

  prevBtnEl.addEventListener('click', () => {
    posX += 80;

    if (posX > 0) {
      posX = maxPosX;
    }
    wrapperEl.style.transform = `translateX(${posX}px)`;
  });
};

const c1 = new Carousel('.carousel1');
const c2 = new Carousel('.carousel2');
