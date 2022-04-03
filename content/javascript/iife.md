---
emoji:
title: '[JS] IIFE (즉시 실행 함수)'
date: '2022-04-03 15:00:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 IIFE (Immediately- Invoked Function Expession, 즉시 실행 함수)

함수를 만들자마자 한 번만 실행하고 이후에 사용할 일이 없을 경우 사용한다.

<br />

```js
const a = 7;

(function () {
  console.log(a * 2);
})();
```

익명 함수를 소괄호로 묶어준 후,<br />
소괄호가 끝나는 부분에 또 다른 소괄호를 붙여준다.

<br />

```j
const a = 7;

(function () {
  console.log(a * 2);
}());
```

익명 함수를 소괄호로 묶어준 후,<br />
중괄호가 끝나는 부분에 소괄호를 붙여준다.

두번 째 방법이 더욱 권장되는 방법이다.

```toc

```
