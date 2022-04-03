---
emoji:
title: '[JS] 화살표 함수'
date: '2022-04-03 14:55:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 화살표 함수 (Arrow Function)

### 1. function () {}

```js
const double = function (x) {
  return x * 2;
};
console.log('double: ', double(7));
```

function 키워드를 사용함 익명함수, 함수 표현이다.

<br />

### 2. () => {}

```js
const doubleArrow = (x) => {
  return x * 2;
};
console.log('doubleArrow', doubleArrow(7));
```

function 키워드 대신 화살표를 사용하는 함수 표현이다.

<br />

```js
const doubleArrow = (x) => x * 2;
```

function 키워드 함수와 화살표 함수의 가장 큰 차이점은<br />
함수 내부의 코드가 한 줄인 경우 **축약**이 가능하다는 것이다.(중괄호, return 키워드)<br />
또한 매개변수가 하나인 경우 소괄호 생략이 가능하다.

<br />

```js
const doubleArrow = (x) => ({
  name: 'autumn',
});
```

축약형으로 객체 데이터를 반환하는 경우에는 <br />
중괄호가 사용되기 때문에, 함수의 블록과 혼동될 수 있다.<br />
이러한 경우 중괄호를 **소괄호**로 한 번 묶어주면 된다.

```toc

```
