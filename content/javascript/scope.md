---
emoji:
title: '[JS] 변수의 유효범위'
date: '2022-04-03 14:20:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 변수의 유효범위 (Variable Scope)

<br />

### 1. 블록 레벨 유효범위 (Block Level Scope)

블록 레벨 유효범위를 가지는 변수 키워드에는 `let`, `const` 가 있다.

```js
function scope() {
  if (true) {
    const a = 123;
    console.log(a);
  }
}
```

const 변수가 선언된 해당 블록 안에 있기 때문에 동작이 가능하다.

<br />

```js
function scope() {
  if (true) {
    const a = 123;
  }
  console.log(a);
}
```

const 변수가 선언된 해당 블록을 벗어나기 때문에 동작이 불가능하다.<br />
Uncaught ReferenceError: a is not defined at scope 에러가 발생한다.

<br />

```js
function scope() {
  if (true) {
    console.log(a);
    const a = 123;
  }
}
```

const 변수가 선언된 해당 블록 안에 있기는 하지만,<br />
변수에 값이 할당된 코드보다 먼저 출력되기 때문에 undefined 출력된다.

<br />

```js
function scope() {
  console.log(a);
  if (true) {
    const a = 123;
  }
}
```

`const` 변수가 선언된 해당 블록을 벗어나기 때문에 동작이 불가능하다.<br />
Uncaught ReferenceError: a is not defined at scope 에러가 발생한다.

위 코드의 const 키워드를 `let` 으로 바꾸어도 결과는 같다.

let, const 키워드를 사용하는 변수는 블록 레벨의 유효 범위를 가진다.<br />
변수가 선언되어져 있는 범위의 중괄호 사이의 부분이 블록을 의미한다.

<br />

### 2. 함수 레벨 유효범위 (Function Level Scope)

함수 레벨 유효범위를 가지는 변수 키워드에는 `var`이 있다.

```js
function scope() {
  console.log(a);
  if (true) {
    var a = 123;
  }
}
```

`var` 키워드를 사용하는 변수는<br />
선언된 함수 범위 안에서는 어디서든 사용할 수 있기 때문에 에러가 발생하지 않는다.<br />
값이 지정되어져 있지 않다는 undefined 가 출력된다.

<br />

의도하지 않은 범위에서 변수가 샤용될 수 있기 때문에<br />
그만큼 메모리를 차지하고 있고,<br />
그것이 결국 개발자가 확인하지 못하는 메모리 누수로 발전할 수 있다.

일반적인 경우에는 var 키워드 보다는 `let`, `const` 를 이용해서 <br />
블록 레벨의 유효범위를 가지도록 변수를 만들어 주는 것이 관리하기에 효과적이다.

```toc

```
