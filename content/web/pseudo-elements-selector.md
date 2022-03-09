---
emoji:
title: '[CSS] 가상 요소 선택자'
date: '2022-03-09 15:40:00'
author: 안가을
tags: web css
categories: WEB
---

## 💙 가상 요소 선택자 (Pseudo-Elements)

### 1. before

```html
<div>
  <!---->
  Content
  <!---->
</div>
```

```css
div::before {
  content: 'before!';
}

// before! Content
```

**[ABC::before]**<br />
Inline 요소<br />
선택자 ABC 요소 내부의 앞 부분에 내용을 삽입한다.

before 선택자를 사용할 경우, content 는 필수 속성이기 때문에<br />
만약 내용이 비어있다 하더라도 `content: ""` 를 반드시 작성해야 한다.

<br />

### 2. after

```css
div::after {
  content: 'after!';
}

// Content after!
```

```css
div::after {
  content: 'after!';
  display: block; <!-- Block 요소로 변경 -->
  width: 30px; <!-- width, height 적용 -->
  height: 30px;
  background-color: pink;
}
```

**[ABC::after]**<br />
Inline 요소<br />
선택자 ABC 요소 내부의 뒷 부분에 내용을 삽입한다.

마찬가지로 after 선택자를 사용할 경우, content 는 필수 속성이기 때문에<br />
만약 내용이 비어있다 하더라도 `content: ""` 를 반드시 작성해야 한다.

```toc

```
