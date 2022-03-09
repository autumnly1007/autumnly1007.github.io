---
emoji:
title: '[CSS] 가상 클래스 선택자'
date: '2022-03-09 15:30:00'
author: 안가을
tags: web css
categories: WEB
---

## 💙 가상 클래스 선택자 (Pseudo-Classes)

### 1. hover

```css
a:hover {
  color: pink;
}
```

**[ABC: hover]**<br />
선택자 ABC 의 요소에 마우스 커서가 올라가 있는 동안을 선택한다.

<br />

### 2. active

```css
a:active {
  color: pink;
}
```

**[ABC: active]**<br />
선택자 ABC 의 요소에 마우스를 클릭하고 있는 동안을 선택한다.

<br />

### 3. focus

```css
input:focus {
  color: pink;
}
```

**[ABC: focus]**<br />
선택자 ABC 요소가 포커스되면 선택한다.

- 포커스가 가능한 요소들: input, select, textarea 등

<br />

> 포커스가 가능하지 않은 요소들을 포커스가 가능한 형태로 만드는 방법
>
> ```html
> <div class="box" tabindex="-1"></div>
> ```
>
> tabindex 속성을 통해 Focus 가 될 수 있는 요소를 만들 수 있다.<br />
> Tab 키를 사용해 Focus 할 수 있는 순서를 지정하는 속성이다.<br />
> 순서로 (값으로) -1 이 아닌 다른 값을 넣는 것은 논리적 흐름을 방해하기 때문에 권장되지 않는다.<br />
> (포커스는 한 페이지에서 하나의 요소만 가능하다.)

<br />

### 4. first child

```html
<div class="animals">
  <span>고양이</span>
  <span>강아지</span>
  <div>토끼</div>
  <p>곰</p>
  <h3>팬더</h3>
</div>
```

```css
.animals span:first-child {
  color: pink;
}
// 고양이
```

**[ABC:first-child]**<br />
선택자 ABC 가 형제 요소 중에서 첫번째라면 선택한다.

<br />

### 5. last child

```html
<div class="animals">
  <span>고양이</span>
  <span>강아지</span>
  <div>토끼</div>
  <p>곰</p>
  <h3>팬더</h3>
</div>
```

```css
.animals h3:last-child {
  color: pink;
}
// 팬더
```

**[ABC:last-child]**<br />
선택자 ABC 가 형제 요소 중에서 마지막 번째라면 선택한다.

<br />

### 6. nth child

```html
<div class="animals">
  <span>고양이</span>
  <span>강아지</span>
  <div>토끼</div>
  <p>곰</p>
  <h3>팬더</h3>
</div>
```

```css
.animals *:nth-child(2) {
  color: pink;
}
// 강아지
```

```css
.animals *:nth-child(2n) {
  color: pink;
}
// n 은 0부터 시작한다. (Zero-Based Numbering)
// 0, 2, 4, 6 ... 번째 형제 요소를 찾는다. (짝수 번째)
// 0번째 요소라는 것은 없으므로 2, 4번째 요소인 강아지, 곰이 선택된다.
```

```css
.animals *:nth-child(2n + 1) {
  color: pink;
}
// 1, 3, 5, 7 ... 번째 형제 요소를 찾는다. (홀수 번째)
```

```css
.animals *:nth-child(n + 2) {
  color: pink;
}
// 2, 3, 4, 5 ... 번째 형제 요소를 찾는다. (2번째 이후 요소)
```

```css
.animals *:nth-child(-n + 2) {
  color: pink;
}
// 2, 1 번째 형제 요소를 찾는다. (2번째 이전 요소)
```

**[ABC:nth-child(n)]**<br />
선택자 ABC가 형제 요소 중 (n)번째라면 선택한다.<br />
n 이라는 키워드를 이용해서 더욱 다양하게 요소를 선택할 수 있다.

<br />

### 7. not

```html
<div class="animals">
  <span>고양이</span>
  <span>강아지</span>
  <div>토끼</div>
  <p>곰</p>
  <h3>팬더</h3>
</div>
```

```css
.animals *:not(span) {
  color: pink;
}
// 토끼, 곰, 팬더
```

**[ABC:not(XYZ)]**<br />
부정 선택자 (Negation)<br />
선택자 XYZ 가 아닌 ABC 요소를 선택한다.

```toc

```
