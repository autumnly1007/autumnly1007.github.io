---
emoji:
title: '[CSS] padding'
date: '2022-03-10 21:30:00'
author: 안가을
tags: web css padding
categories: CSS
---

## 💙 padding

### 1. padding (내부 여백)

요소의 **내부 여백**(공간)을 지정하는 단축 속성이다.<br />
여백이 생긴만큼 요소 자체의 크기가 커진다.

- 기본값: `0` - 내부 여백 없음
- 단위: px, em, vw 등 단위로 지정
- %: 부모 요소의 **가로 너비**에 대한 비율로 지정

<br />

### 2. 단축 속성

단축 속성이란, 각 방향을 한 번에 적용해주는 단축키와 같은 속성을 말한다.

```css
padding: 10px;
```

`top`, `right`, `bottom`, `left`: 10px

<br />

```css
padding: 10px 20px;
```

`top`, `bottom`: 10px<br />
`left`, `right`: 20px

<br />

```css
padding: 10px 20px 30px;
```

`top`: 10px<br />
`left, right`: 20px<br />
`bottom`: 30px

<br />

```css
padding: 10px 20px 30px 40px;
```

`top`: 10px<br />
`right`: 20px<br />
`bottom`: 30px<br />
`right`: 40px

top 부터 시작해서 시계 방향으로 적용된다.

<br />

### 3. 개별 속성

각 방향마다 하나씩 적용하는 속성을 말한다.

```css
padding-top: 10px;
padding-bottom: 20px;
padding-left: 30px;
padding-right: 40px;
```

<br />

```toc

```
