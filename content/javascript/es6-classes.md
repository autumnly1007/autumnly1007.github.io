---
emoji:
title: '[JS] ES6 Classes'
date: '2022-04-07 20:00:00'
author: μκ°μ
tags: web js es6
categories: JS
---

## π ES6 Classes

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

μΌλ°ν¨μ μμ± μ μ½λ‘ κ³Ό function ν€μλλ₯Ό μλ΅νμ¬ μ¬μ©μ΄ κ°λ₯νλ€.

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

μλ°μ€ν¬λ¦½νΈλ **νλ‘ν νμ** κΈ°λ°μ νλ‘κ·Έλλ° μΈμ΄μ΄μ§λ§,<br />
μ‘°κΈ λ μμ μ μ΄κ³  μ λ’°λκ° λμ λ€λ₯Έ **κ°μ²΄μ§ν₯** νλ‘κ·Έλλ° μΈμ΄λ€μ μν₯μ λ°μμ<br />
**ν΄λμ€**λΌλ κ°λμ νλ΄λΈ μλ‘μ΄ λ¬Έλ²μ **ES6** μμ μ κ³΅νκΈ° μμνλ€.

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

`class` ν€μλλ₯Ό μ¬μ©νμ¬ ν΄λμ€λ₯Ό λͺμνκ³ ,<br />
`constructor` ν€μλλ₯Ό μ¬μ©νμ¬ μμ±μ ν¨μλ₯Ό λ§λ€ μ μλ€.

λ³λλ‘ prototype μμ±μ μ¬μ©νμ§ μμλ<br />
λ°λ‘ prototype μΌλ‘ λ§λ€μ΄μ§λ λ©μλκ° μ μλλ€.

```toc

```
