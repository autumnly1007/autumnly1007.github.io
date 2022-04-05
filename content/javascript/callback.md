---
emoji:
title: '[JS] 콜백 (Callback)'
date: '2022-04-05 20:10:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 콜백 (Callback)

콜백이란 함수의 인수로 사용되는 함수를 말한다.<br />
특정한 실행 위치를 보장하는 용도로 많이 활용된다.

<br />

```js
function timeout() {
  setTimeout(() => {
    console.log('Cat');
  }, 3000);
}

timeout();

console.log('Dog');
```

Dog 이 먼저 출력되고 나서 3초 후에 Cat 이 출력된다.

<br />

```js
// 파라미터로 콜백을 받음
function timeout(callback) {
  setTimeout(() => {
    console.log('Cat');
    // 콜백 호출
    callback();
  }, 3000);
}

// 콜백 (Callback)
// 함수의 인수로 함수가 사용됨
timeout(() => {
  console.log('Dog');
});
```

3초 후에 Cat 이 먼저 출력되고 바로 Dog 이 출력된다.

<br />

setTimeout 뿐만아니라,<br />
로직이 복잡해서 처리하는 데 시간이 많이 걸리는 경우에 콜백 함수를 이용하면<br />
모든 처리가 완료된 후에 원하는 내용을 실행할 수 있다.

```toc

```
