---
emoji:
title: '[JavaScript] Null & Undefined'
date: '2022-03-19 21:40:00'
author: μκ°μ
tags: web js javascript
categories: JS
---

## π null κ³Ό undefined

### 1.null

μ΄λ€ κ°μ΄ μλμ μΌλ‘ λΉμ΄μμμ μλ―Ένλ€.

```js
let empty = null;

console.log(empty); // null
```

<br />

### 2. undefined

κ°μ΄ ν λΉλμ§ μμ μνλ₯Ό λνλΈλ€.

```js
let undef;
let obj = { abc: 123 };

console.log(undef); // undefined
console.log(obj.xyz); // undefined
```

<br />

> [ null μ²΄ν¬ ]<br />
> μ²΄ν¬λμ === null λ³΄λ€λ, μ²΄ν¬λμ == null λ‘ νλ κ²μ΄ μ’λ€.<br />
> `null == undefined` λ `true` μ΄κΈ° λλ¬Έμ<br />
> μ²΄ν¬λμ == null λ‘ μ²΄ν¬νλ©΄ null κ³Ό undefined λ₯Ό λͺ¨λ μ²΄ν¬ν  μ μκΈ° λλ¬Έμ΄λ€.
>
> 0 == null == undefined == ββ == false

<br />

```toc

```
