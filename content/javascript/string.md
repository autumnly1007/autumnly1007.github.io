---
emoji:
title: '[JS] 문자'
date: '2022-04-10 22:10:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 문자

### 1. String

```js
const char = String(123); // '123'
const obj = new String(123); // String {"123"}
```

String 은 전역 객체이며 문자열의 생성자이다. <br />

```js
const char1 = '123';
const char2 = `123`;
```

하지만 리터럴 방식으로 문자열을 만드는 것이 훨씬 간단하기 때문에 보통은 리터럴 방식을 사용한다.

### 2. String.prototype.indexOF()

호출한 String 객체에서 주어진 값과 알치히는 첫 번째 인덱스를 반홤한다.
일치하는 값이 없으면 -1 을 반환한다.

```js
const result = 'Hello world!'.indexOf('world');
console.log(result); // 6
```

```toc

```
