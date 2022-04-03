---
emoji:
title: '[JS] Arguments'
date: '2022-04-03 14:50:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 Arguments

```js
function sum() {
  // Arguments(2) [7, 3, callee: f, Symbol(Symbol.iterator): f]...
  console.log(arguments);
  return arguments[0] + arguments[1];
}

console.log(sum(7, 3));
```

함수 내부에서는 따로 매개변수를 지정하지 않아도<br />
arguments 라는 특정한 객체를 사용할 수 있다.

함수를 실행할 때 사용하는 인수가 너무 많아서<br />
매개변수를 일일이 지정하기 어려울 경우 arguments 객체를 활용할 수 있다.<br />
하지만 되도록 매개변수 이름을 명시하는 것이 좋다.

```toc

```
