---
emoji:
title: '[JS] 클래스 (Class)'
date: '2022-04-05 20:20:00'
author: 안가을
tags: web js class
categories: JS
---

## 💙 클래스 (Class)

```js
const autumn = {
  firstName: 'Autumn',
  lastName: 'Ahn',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const amy = {
  firstName: 'Amy',
  lastName: 'Clarke',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const neo = {
  firstName: 'Neo',
  lastName: 'Smith',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(autumn);
// {firstName: 'Autumn', lastName: 'Ahn', getFullName: ƒ}

console.log(autumn.getFullName());
// 'Autumn Ahn';
```

객체 데이터를 일일이 하나씩 만드는 것은<br />
간단한 애플리케이션이라면 상관이 없지만,<br />

더욱 로직이 복잡해지고 큰 규모의 서비스를 만든다고 가정하면<br />
이러한 로직들은 효율이 많이 떨어지게 된다.<br />

<br />

여기서 효율이란 일종의 메모리를 관리하는 효율을 이야기한다.<br />
로직이 똑같은데도 불구하고 만들어내는 객체 데이터의 개수만큼<br />
데이터와 함수가 각각 **메모리에 할당**되기 때문이다.

이러한 경우 자바스크립트의 `클래스`를 사용할 수 있다.<br />

<br />

```js
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// 메모리에 한 번만 만들어짐
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// 객체 데이터 생성 (user -> 생성자함수)
const autumn = new User('Autumn', 'Ahn');
const amy = new User('Amy', 'Clarke');
const neo = new User('Neo', 'Smith');

console.log(autumn);
// User {firstName: "Autumn", lastName: "Ahn"}

console.log(autumn.getFullName());
// 'Autumn Ahn'
```

중괄호라는 특정한 기호를 통해서 객체 데이터를 한번에 만들어낼 수 있다.<br />
이렇게 **특정한 기호**만 가지고 데이터를 만들어내는 것을 `리터럴 방식`이라고 한다.<br />

대표적으로 따옴표 기호를 사용해 문자 데이터를 만들어내는 것, ("A" => 문자 데이터)<br />
대괄호 기호를 사용해 배열 데이터를 만들어내는 것이 있다. ([] => 배열 데이터)

<br />

**new** 라는 키워드를 통해서 생성자 함수로 실행한 결과를 반환해서 **할당된 변수**를 `인스턴스`라고 한다.<br />
또한 클래스의 이름은 **파스칼 케이스**로 작성해야 한다.

```toc

```
