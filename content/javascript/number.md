---
emoji:
title: '[JS] 숫자 (Number)'
date: '2022-04-14 20:00:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 숫자

### 1. Number.prototype.toFixed()

소수점의 몇 번째 자리까지 유지할 것인지를 인수로 전달한다.<br />
숫자 데이터가 아닌 문자열로 반환된다.

```js
const pi = 3.14159265358979;
const str = pi.toFixed(2);
console.log(str); // 3.14
console.log(typeof str); // string
```

<br />

### 2. parseInt()

문자열 데이터를 정수로 반환한다. (전역함수)

```js
const integer = parseInt(str);
console.log(integer); // 3
console.log(typeof integer); // number
```

<br />

### 3. parseFloat()

문자열 데이터의 소수점까지 유지하면서 숫자로 반환한다. (전역함수)

```js
const float = parseFloat(str);
console.log(float); // 3.14
console.log(typeof float); // number
```

<br />

### 4. Math

수학적인 연산을 하는 메소드들을 가진 자바스크립트의 내장 객체이다.

```js
// Math.abs() : 절대값을 반환한다.
console.log(Math.abs(-12)); // 12

// Math.min() : 가장 작은값을 반환한다.
console.log(Math.min(2, 8)); // 2

// Math.max() : 가장 큰 값을 반환한다.
console.log(Math.max(2, 8)); // 8

// Math.ceil() : 정수 단위로 올림 처리해서 반환한다.
console.log(Math.ceil(3.14)); // 4

// Math.floor() : 정수 단위로 내림 처리해서 반환한다.
console.log(Math.floor(3.14)); // 3

// Math.round() : 정수 단위로 반올림 처리해서 반환한다.
console.log(Math.round(3.14)); // 3

// Math.random() : 난수를 반환한다. (인수가 없을 경우 0-1 사이의 값)
console.log(Math.random()); // 0.06868616174987663 등
```

```toc

```
