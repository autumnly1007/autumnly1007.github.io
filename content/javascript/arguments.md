---
emoji:
title: '[JS] Arguments'
date: '2022-04-03 14:50:00'
author: μκ°μ
tags: web js
categories: JS
---

## π Arguments

```js
function sum() {
  // Arguments(2) [7, 3, callee: f, Symbol(Symbol.iterator): f]...
  console.log(arguments);
  return arguments[0] + arguments[1];
}

console.log(sum(7, 3));
```

ν¨μ λ΄λΆμμλ λ°λ‘ λ§€κ°λ³μλ₯Ό μ§μ νμ§ μμλ<br />
arguments λΌλ νΉμ ν κ°μ²΄λ₯Ό μ¬μ©ν  μ μλ€.

ν¨μλ₯Ό μ€νν  λ μ¬μ©νλ μΈμκ° λλ¬΄ λ§μμ<br />
λ§€κ°λ³μλ₯Ό μΌμΌμ΄ μ§μ νκΈ° μ΄λ €μΈ κ²½μ° arguments κ°μ²΄λ₯Ό νμ©ν  μ μλ€.<br />
νμ§λ§ λλλ‘ λ§€κ°λ³μ μ΄λ¦μ λͺμνλ κ²μ΄ μ’λ€.

```toc

```
