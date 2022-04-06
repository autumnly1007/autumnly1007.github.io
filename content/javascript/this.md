---
emoji:
title: '[JS] this'
date: '2022-04-06 20:00:00'
author: 안가을
tags: web js this
categories: JS
---

## 💙 this

```js
const autumn = {
  name: 'Autumn',
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

autumn.normal(); // Autumn
autumn.arrow(); // undefined

const amy = {
  name: 'Amy',
  normal: autumn.normal, // 함수 실행이 아니라 할당
  arrow: autumn,
  arrow,
};

amy.normal(); // Amy
amy.arrow(); // undefined
```

일반 (Normal) 함수는 **호출 위치**에 따라 this 가 정의된다.<br />
화살표 (Arrow) 함수는 자신이 **선언된 함수 범위**에서 this 가 정의된다.

<br />

```js
function User(name) {
  this.name = name;
}

User.prototype.normal = function () {
  console.log(this.name);
};

User.prototype.arrow = () => {
  console.log(this.name);
};

const autumn = new User('autumn');

autumn.normal(); // Autumn
autumn.arrow(); // undefined
```

<br />

```js
const timer = {
  name: 'Hello',
  timeout: function () {
    // 일반함수
    setTimeout(function () {
      console.log(this.name);
    }, 2000);
  },
};

timer.timeout(); // undefiend
// this 를 setTimeout 함수 안에서 찾음

const timer = {
  name: 'Hello',
  // 일반함수
  timeout: function () {
    // 화살표함수
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};

timer.timeout(); // Hello
// 화살표함수를 감싸고 있는 일반함수 범위에서 this 가 정의됨
// this 는 timer 객체 데이터를 가르킴
```

setTimeout, setInterval 함수의 콜백함수로는 화살표함수를 사용하는 것이 활용도가 높다.<br />
특정한 범위에서 this 를 가르킬 수 있기 때문이다.

```toc

```
