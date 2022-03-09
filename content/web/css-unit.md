---
emoji:
title: '[CSS] 단위'
date: '2022-03-09 23:30:00'
author: 안가을
tags: web css
categories: WEB
---

## 💙 CSS 단위

### 1. px (픽셀)

### 2. % (상대적 백분율)

### 3. em

```css
div {
  font-size: 16px; /* 16px === 1em */
}

div {
  font-size: 2em; /* 2em === 32px */
}
```

**해당 요소**의 **글꼴 크기**가 1em 의 기준이 된다.

<br />

```css
.parent {
  width: 300px;
  height: 200px;
  background-color: blue;
  font-size: 10px;
}

.child {
  /* parent 에서 상속되어 font-size: 10px 을 가진다. 1em === 10px */
  width: 20em; /* 10 * 20 = 200px */
  height: 50%;
  background-color: orange;
}
```

> 상위 요소의 font-size 가 변경되면 1em 의 기준이 바뀔 수 있으므로,<br />
> em 단위는 잘못 사용하면 혼란스러울 수 있다.

<br />

### 4. rem

```css
html {
  font-size: 16px; /* 16px === 1rem */
}

div {
  font-size: 2rem; /* 2rem === 32px */
}
```

**루트 요소**(html)의 **글꼴 크기**가 1rem 의 기준이 된다.

<br />

```css
html {
  /* font-size: 16px; */
}

.parent {
  width: 300px;
  height: 200px;
  background-color: blue;
  font-size: 10px;
}

.child {
  width: 20rem; /* 16 * 20 === 320px */
  height: 50%;
  background-color: orange;
}
```

> 기본적으로 브라우저는 따로 명시하지 않은 경우 16px 만큼의 글꼴 크기를 가진다.

<br />

### 5. vw

**뷰포트 가로 너비**의 백분율<br />
ex) 1vw: 뷰포트 가로 너비의 1% 크기

<br />

### 6. vh

**뷰포트 세로 너비**의 백분율<br />
ex) 10vh: 뷰포트 세로 너비의 10% 크기

```toc

```
