---
emoji:
title: '[JS] 데이터 타입 확인'
date: '2022-04-03 14:10:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 데이터 타입 확인

### 1. typeof()

```js
console.log(typeof 'Hello world!'); // string
console.log(typeof 123); // number
console.log(typeof true); //boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object
```

typeof(데이터)를 통해 데이터의 타입을 확인할 수 있다.<br />

하지만 null, 객체, 배열은 object 로만 확인이 가능하다.<br />
object 의 type 까지 확인하기 위해서는 아래의 메소드를 호출하면 된다.<br />

<br/>

### 2. Object.prototype.toString.call()

```js
function getType(data) {
  return Object.prototype.toString.call(data);
}

console.log(getType(123)); // [object Number]
console.log(getType(false)); // [object Boolean]
console.log(getType(undefined)); // [object Undefined]
console.log(getType(null)); // [object Null]
console.log(getType({})); // [object Object]
console.log(getType([])); // [object Array]
```

```toc

```
