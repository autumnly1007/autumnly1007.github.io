---
emoji:
title: '[JavaScript] 메소드 체이닝'
date: '2022-03-20 20:00:00'
author: 안가을
tags: web js method chaining
categories: JS
---

## 💙 메소드 체이닝 (Method Chaning)

메소드를 마치 체인처럼 연결해서 사용하는 것을 의미한다.

```js
const a = 'Hello!';

// split: 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse: 배열 뒤집기
// join: 배열을 인수 기준으로 문자로 병합해 반환

const b = a.split('').reverse().join(''); // 메소드 체이닝

console.log(a); // Hello!
console.log(b); // !olleH
```

```toc

```
