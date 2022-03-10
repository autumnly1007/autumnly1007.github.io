---
emoji:
title: '[CSS] overflow'
date: '2022-03-10 23:00:00'
author: 안가을
tags: web css overflow
categories: CSS
---

## 💙 overflow

요소의 크기 이상으로 **내용이 넘쳤을 때**,<br />
보여짐을 제어하는 **단축 속성**을 의미한다.

<br />

```css
.parent {
  width: 200px;
  height: 300px;
  background-color: royalblue;
}

.child {
  width: 300px; /* 자식의 width 가 부모의 width 보다 넘침 (x축) */
  height: 100px; /* 넘치지 않음 (y축) */
  background-color: yellow;
}
```

### 1. 기본값: `visible`

넘친 내용을 그대로 보여준다.

### 2. `hidden`

넘친 내용을 잘라낸다.

### 3. `scroll`

넘친 내용을 잘라내고, 스크롤바를 생성한다.<br />
x축, y축 모두 스크롤바를 생성한다.

### 4. `auto`

넘친 내용이 있는 경우에만 잘라내고, 스크롤바를 생성한다.

넘친 내용이 있는 축에만 스크롤바를 생성한다.<br />
그렇기 때문에 많은 경우에 scroll 보다는 auto 를 사용한다.

<br />

### 5. 개별 속성

요소의 크기 이상으로 **내용이 넘쳤을 때**,
보여짐을 제어하는 **개별 속성**

- overflow-x (x축 넘침 제어)
- overflow-y (y축 넘침 제어)

```toc

```
