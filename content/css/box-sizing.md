---
emoji:
title: '[CSS] box-sizing'
date: '2022-03-10 22:30:00'
author: 안가을
tags: web css box sizing box-sizing
categories: CSS
---

## 💙 box-sizing

요소의 크기 계산 기준을 지정하는 것이다.

- 기본값: `content-box`- 요소의 내용(content)으로 크기를 계산한다.
- `border-box`: 요소의 내용 + padding + border 로 크기를 계산한다.

<br />

### 1. content-box

요소의 `내용`(content)으로 크기를 계산한다.<br />

padding, border 같이 요소의 크기가 커지는 속성이 적용되었을 때,<br />
원하는 정확한 수치를 위해서는 width, height 를 **수동으로 계산해서 명시**해줘야 하는 단점이 있을 수 있다.

```css
div {
  width: 100px;
  padding: 20px;
  border: 1px solid red;
}
/* 실제 가로 너비: 1 + 20 + 100 + 20 + 1 = 142px */
```

<br />

### 1. border-box

요소의 `내용` + `padding` + `border` 로 크기를 계산한다.<br />

직접 명시한 width, height **사이즈를 유지**하면서,<br />
내부에 padding, border 가 **자동으로 계산**되어 들어간다.<br />

따라서 width, height 를 **수동으로 계산해서 명시**해줘야 하는 불편함을 겪지 않도록 해준다.

```css
div {
  width: 100px;
  padding: 20px;
  border: 1px solid red;
  box-sizing: border-box;
}
/* 실제 가로 너비: 100px */
```

```toc

```
