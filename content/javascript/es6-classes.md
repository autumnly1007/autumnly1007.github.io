---
emoji:
title: '[JS] ES6 Classes'
date: '2022-04-07 20:00:00'
author: 안가을
tags: web js es6
categories: JS
---

## 💙 ES6 Classes

```js
const autumn = {
  name: 'Autumn',
  /*
  normal: function () {
    console.log(this.name);
  }, 
  */
  normal() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

autumn.normal();
autumn.arrow();
```

일반함수 작성 시 콜론과 function 키워드를 생략하여 사용이 가능하다.

<br />

```js
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const autumn = new User('Autumn', 'Ahn');
console.log(autumn.getFullName());
```

자바스크립트는 **프로토타입** 기반의 프로그래밍 언어이지만,<br />
조금 더 안정적이고 신뢰도가 높은 다른 **객체지향** 프로그래밍 언어들의 영향을 받아서<br />
**클래스**라는 개념을 흉내낸 새로운 문법을 **ES6** 에서 제공하기 시작했다.

<br />

```js
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const autumn = new User('Autumn', 'Ahn');
console.log(autumn.getFullName());
```

`class` 키워드를 사용하여 클래스를 명시하고,<br />
`constructor` 키워드를 사용하여 생성자 함수를 만들 수 있다.

별도로 prototype 속성을 사용하지 않아도<br />
바로 prototype 으로 만들어지는 메소드가 정의된다.

```toc

```
