---
emoji:
title: '[JS] 호이스팅 (Hoisting)'
date: '2022-04-03 15:10:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 호이스팅 (Hoisting)

`함수 선언부`가 유효범위 최상단으로 끌어올려지는 현상을 의미한다.

<br />

### 1. 함수 표현

```js
const a = 7;

double();

const double = function () {
  console.log(a * 2);
};
```

<br />

double 함수가 실행될 때에는<br />
해당 함수가 아직 만들어지지 않기 때문에 에러가 발생한다.<br />
Uncaught TypeError: double is not a function ...

`함수 표현`을 사용하는 경우에는 함수가 만들어지기 전에 함수를 호출하는 것이 불가능하다.

<br />

### 2. 함수 선언

```js
// 자바스크립트 엔진이 함수 선언을 최상단으로 끌어올린다.

const a = 7;

double();

function double() {
  console.log(a * 2);
}
```

<br />

`함수 선언`을 사용하는 경우에는, <br />
함수 선언부가 유효범위 최상단으로 끌어올려지는 현상인 <br />
**호이스팅**이 발생하기 때문에 에러가 발생하지 않는다.

<br />

> 함수 호출 시 사용하는 이름을 보고<br />
> 대략적으로 함수의 내용을 유추할 수 있기 때문에<br />
>
> 함수를 코드 중간중간에 작성하는 것 보다는,<br />
> 함수가 직접적으로 만들어지는 부분은 코드의 최하단 부분에 작성하고<br />
> 호출을 위에서 아래 방향으로 하는 것이 전체적인 코드의 흐름을 파악하는 데 효율적일 수 있다.

```toc

```
