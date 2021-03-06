---
emoji:
title: '[JavaScript] DOM API'
date: '2022-03-20 19:50:00'
author: μκ°μ
tags: web js dom api
categories: JS
---

## π DOM API

### 1. DOM API

Document Object Model, Application Programming **Interface**

```html
<script defer src="./main.js"></script>
...
<div class="box">Box!!</div>
```

defer: νμ΄μ§κ° λͺ¨λ λ‘λλ νμ ν΄λΉ μΈλΆ μ€ν¬λ¦½νΈκ° μ€νλ¨μ λͺμν¨

### 2. querySelector & addEventListener

```js
// HTML μμ 1κ° κ²μ/μ°ΎκΈ°
const boxEl = document.querySelector('.box');

// HTML μμμ μ μ©ν  μ μλ λ©μλ
boxEl.addEventListener();

// μΈμλ₯Ό μΆκ°ν  μ μμ
boxEl.addEventListener(1, 2);

// μ²«λ²μ§Έ μΈμ 1 - μ΄λ²€νΈ(Event, μν©)
boxEl.addEventListener('click', 2);

// λλ²μ§Έ μΈμ 2 - νΈλ€λ¬(Handler, μ€νν  ν¨μ)
boxEl.addEventListener('click', function () {
  console.log('Click!');
});
```

### 3. classList (add, remove)

```js
// μμμ ν΄λμ€ μ λ³΄ κ°μ²΄ νμ©
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains); // true

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains); // false
```

### 4. querySelectorAll & forEach

```js
// HTML μμ λͺ¨λ κ²μ/μ°ΎκΈ°
const boxEls = document.querySelectorAll('.box'); // μ μ¬λ°°μ΄
console.log(boxEls);

// μ°Ύμ μμλ€μ λ°λ³΅ν΄μ ν¨μ μ€ν
// μ΅λͺ ν¨μλ₯Ό μΈμλ‘ μΆκ°ν¨
boxEls.forEach(function () {});

// μ²«λ²μ§Έ λ§€κ°λ³μ(boxEl): λ°λ³΅ μ€μΈ μμ
// λλ²μ§Έ λ§€κ°λ³μ(index): λ°λ³΅ μ€μΈ λ²νΈ
boxEls.forEach(function (boxEl, index) {});

// μΆλ ₯
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});
```

### 5. textContent

```html
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
```

```js
// box class κ° μ§μ λ μ²«λ²μ§Έ div μμ
const boxEl = document.querySelector('.box');

// Getter, κ°μ μ»λ μ©λ
console.log(boxEl.textContent); // 1

// Setter, κ°μ μ§μ νλ μ©λ
boxEl.textContent = 'Hello!';
console.log(boxEl.textContent); // Hello!
```

```toc

```
