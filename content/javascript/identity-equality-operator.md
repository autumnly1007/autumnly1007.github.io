---
emoji:
title: '[JS] 일치연산자와 동등연산자'
date: '2022-04-03 14:30:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 일치연산자와 동등연산자

### 1. 일치연산자 (Identity Operator)

```js
const a = 1;
const a = '1';

console.log(a === b); // false
```

두 데이터의 데이터타입, 값이 일치하는지 비교한다.

<br />

### 1. 동등연산자 (Equality Operator)

```js
const a = 1;
const a = '1';

console.log(a == b); // true
```

두 데이터의 값만 일치하는지 비교한다.<br />
동등연산자를 사용하면 형변환이 일어나면서 두 데이터를 비교하기 때문에<br />
의도하지 않게 다른 값이 같다는 결과가 나오기 때문에 사용이 권장되지 않는다.

```toc

```
