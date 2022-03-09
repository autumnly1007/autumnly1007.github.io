---
emoji:
title: '[CSS] 스타일 상속'
date: '2022-03-09 16:50:00'
author: 안가을
tags: web css
categories: CSS
---

## 💙 스타일 상속

```html
<div class="ecosystem">
  생태계
  <div class="animal">
    동물
    <div class="cat">고양이</div>
    <div class="dog">강아지</div>
  </div>
  <div class="plant">식물</div>
</div>
```

```css
.animal {
  color: pink;
}
// 동물, 고양이, 강아지의 글자 색상 => pink
```

**스타일 상속**이란, <br />
적용된 스타일 내용이 해당하는 요소의 자식요소, 하위요소 까지 적용되는 것을 말한다.

### 1. 상속되는 CSS 속성들

글자/문자 관련 속성들이 상속된다. (모든 글자/문자 속성은 아님)

- font-style (글자 기울기)
- font-weight (글자 두께)
- font-size (글자 크기)
- line-height (줄 높이)
- font-family (폰트(서체))
- color (글자 색상)
- text-align (정렬)
  ...

### 2. 강제 상속

실질적으로 상속이 되지 않는 CSS 내용을 강제적으로 상속시키는 것을 말한다. <br />
inherit 이라는 값을 사용한다.

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 300px;
  height: 200px;
  background-color: pink;
}

.child {
  width: 100px;
  height: inherit; // 200px
  background-color: inherit; // pink
}
```

```toc

```
