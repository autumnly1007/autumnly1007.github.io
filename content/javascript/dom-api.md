---
emoji:
title: '[JavaScript] DOM API'
date: '2022-03-20 19:50:00'
author: 안가을
tags: web js dom api
categories: JS
---

## 💙 DOM API

### 1. DOM API

Document Object Model, Application Programming **Interface**

```html
<script defer src="./main.js"></script>
...
<div class="box">Box!!</div>
```

defer: 페이지가 모두 로드된 후에 해당 외부 스크립트가 실행됨을 명시함

### 2. querySelector & addEventListener

```js
// HTML 요소 1개 검색/찾기
const boxEl = document.querySelector('.box');

// HTML 요소에 적용할 수 있는 메소드
boxEl.addEventListener();

// 인수를 추가할 수 있음
boxEl.addEventListener(1, 2);

// 첫번째 인수 1 - 이벤트(Event, 상황)
boxEl.addEventListener('click', 2);

// 두번째 인수 2 - 핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function () {
  console.log('Click!');
});
```

### 3. classList (add, remove)

```js
// 요소의 클래스 정보 객체 활용
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains); // true

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains); // false
```

### 4. querySelectorAll & forEach

```js
// HTML 요소 모두 검색/찾기
const boxEls = document.querySelectorAll('.box'); // 유사배열
console.log(boxEls);

// 찾은 요소들을 반복해서 함수 실행
// 익명 함수를 인수로 추가함
boxEls.forEach(function () {});

// 첫번째 매개변수(boxEl): 반복 중인 요소
// 두번째 매개변수(index): 반복 중인 번호
boxEls.forEach(function (boxEl, index) {});

// 출력
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});
```

### 5. textContent

```html
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
```

```js
// box class 가 지정된 첫번째 div 요소
const boxEl = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxEl.textContent); // 1

// Setter, 값을 지정하는 용도
boxEl.textContent = 'Hello!';
console.log(boxEl.textContent); // Hello!
```

```toc

```
