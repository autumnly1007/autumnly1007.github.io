---
emoji:
title: '[JavaScript] 함수 선언 & 함수 표현'
date: '2022-03-19 22:50:00'
author: 안가을
tags: web js function
categories: JS
---

## 💙 함수의 선언과 함수의 표현

### 1. 기명 함수 (이름이 있는 함수)

```js
// 함수 선언
function hello() {
  console.log('hello');
}

// 함수 호출
hello();
```

function 키워드를 사용하고,<br />
이름을 직접적으로 명시하는 것을 함수의 선언이라고 한다.

### 2. 익명 함수 (이름이 없는 함수)

```js
// 함수 표현
let world = function () {
  console.log('world');
};

// 함수 호출
world();
```

이름의 명시 없이,<br />
변수에 할당하여 사용하는 것은 함수의 표현이라고 한다.

```toc

```
