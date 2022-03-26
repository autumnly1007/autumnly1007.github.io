---
emoji:
title: 'BEM'
date: '2022-03-26 16:00:00'
author: 안가을
tags: web css bem
categories: WEB
---

## 💙 BEM (Block Element Modifier)

HTML 클래스 속성의 작명법

<br />

### 1. `요소__일부분`

Underscore(Ladash) 기호로 요소의 일부분을 표시

```html
<div class="container">
  <div class="container__name"></div>
  <div class="item">
    <div class="item__name"></div>
  </div>
</div>
```

클래스이름만 보고도 어느 요소의 일부분인지 직관적으로 유추할 수 있다.

<br />

### 2. `요소--상태`

Hyphen(Dash) 기호로 요소의 상태를 표시

```html
<div class="btn btn--primary"></div>
<div class="btn btn--success"></div>
<div class="btn btn--error"></div>
```

클래스의 이름만 보고도 어떤 역할을 할 것인지 유추할 수 있다.

```toc

```
