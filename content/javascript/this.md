---
emoji:
title: '[JS] this'
date: '2022-04-06 20:00:00'
author: μκ°μ
tags: web js this
categories: JS
---

## π this

```js
const autumn = {
  name: 'Autumn',
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

autumn.normal(); // Autumn
autumn.arrow(); // undefined

const amy = {
  name: 'Amy',
  normal: autumn.normal, // ν¨μ μ€νμ΄ μλλΌ ν λΉ
  arrow: autumn,
  arrow,
};

amy.normal(); // Amy
amy.arrow(); // undefined
```

μΌλ° (Normal) ν¨μλ **νΈμΆ μμΉ**μ λ°λΌ this κ° μ μλλ€.<br />
νμ΄ν (Arrow) ν¨μλ μμ μ΄ **μ μΈλ ν¨μ λ²μ**μμ this κ° μ μλλ€.

<br />

```js
function User(name) {
  this.name = name;
}

User.prototype.normal = function () {
  console.log(this.name);
};

User.prototype.arrow = () => {
  console.log(this.name);
};

const autumn = new User('autumn');

autumn.normal(); // Autumn
autumn.arrow(); // undefined
```

<br />

```js
const timer = {
  name: 'Hello',
  timeout: function () {
    // μΌλ°ν¨μ
    setTimeout(function () {
      console.log(this.name);
    }, 2000);
  },
};

timer.timeout(); // undefiend
// this λ₯Ό setTimeout ν¨μ μμμ μ°Ύμ

const timer = {
  name: 'Hello',
  // μΌλ°ν¨μ
  timeout: function () {
    // νμ΄νν¨μ
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};

timer.timeout(); // Hello
// νμ΄νν¨μλ₯Ό κ°μΈκ³  μλ μΌλ°ν¨μ λ²μμμ this κ° μ μλ¨
// this λ timer κ°μ²΄ λ°μ΄ν°λ₯Ό κ°λ₯΄ν΄
```

setTimeout, setInterval ν¨μμ μ½λ°±ν¨μλ‘λ νμ΄νν¨μλ₯Ό μ¬μ©νλ κ²μ΄ νμ©λκ° λλ€.<br />
νΉμ ν λ²μμμ this λ₯Ό κ°λ₯΄ν¬ μ μκΈ° λλ¬Έμ΄λ€.

```toc

```
