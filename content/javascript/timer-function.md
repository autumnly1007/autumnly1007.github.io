---
emoji:
title: '[JS] 타이머 함수'
date: '2022-04-05 20:00:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 타이머 함수

### 1. setTimeout

```js
setTimeout(함수, 시간);
```

```js
// 3초 후에 함수 실행
setTimeout(function () {
  console.log('hello');
}, 3000);

// arrow function
setTimeout(() => {
  console.log('hello');
}, 3000);
```

일정 시간 후 함수를 실행한다.

<br />

### 2. setInterval

```js
setInterval(함수, 시간);
```

```js
// 3초에 한번씩 함수 실행
setInterval(() => {
  console.log('hello');
}, 3000);
```

시간 간격마다 함수를 실행한다.

<br />

### 3. clearTimeout

```js
clearTimeout();
```

설정된 Timeout 함수를 종료한다.

<br />

### 4. clearInterval

```js
clearInterval();
```

설정된 Interval 함수를 종료한다.

```toc

```
