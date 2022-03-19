---
emoji:
title: '[JavaScript] Null & Undefined'
date: '2022-03-19 21:40:00'
author: 안가을
tags: web js javascript
categories: JS
---

## 💙 null 과 undefined

### 1.null

어떤 값이 의도적으로 비어있음을 의미한다.

```js
let empty = null;

console.log(empty); // null
```

<br />

### 2. undefined

값이 할당되지 않은 상태를 나타낸다.

```js
let undef;
let obj = { abc: 123 };

console.log(undef); // undefined
console.log(obj.xyz); // undefined
```

<br />

> [ null 체크 ]<br />
> 체크대상 === null 보다는, 체크대상 == null 로 하는 것이 좋다.<br />
> `null == undefined` 는 `true` 이기 때문에<br />
> 체크대상 == null 로 체크하면 null 과 undefined 를 모두 체크할 수 있기 때문이다.
>
> 0 == null == undefined == ‘’ == false

<br />

```toc

```
