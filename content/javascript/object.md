---
emoji:
title: '[JavaScript] 객체 & 메소드'
date: '2022-03-19 23:00:00'
author: 안가을
tags: web js object method
categories: JS
---

## 💙 객체와 메소드

```js
const cat = {
  name: 'kitty',
  age: 2,
  // 메소드 (Method), 익명함수
  getName: function () {
    return this.name;
  },
};
```

```js
const catName = cat.getName(); // 함수 실행 후 변수에 할당
console.log(catName); // kitty
```

객체 안에 있는 속성에 함수를 할당한 것은<br />
속성이 아니라 메소드라고 한다.

```toc

```
