---
emoji:
title: '[CSS] margin'
date: '2022-03-10 21:00:00'
author: 안가을
tags: web css margin
categories: CSS
---

## 💙 margin

### 1. margin (외부 여백)

요소의 **외부 여백**(공간)을 지정하는 **단축 속성**이다.<br />
음수 값도 사용이 가능하다.

- 기본값: `0` - 외부 여백 없음
- auto: 브라우저가 여백을 계산함<br />
  가로(세로) 너비가 있는 요소의 가운데 정렬에 활용한다.
- 단위: px, em, vw 등 단위로 지정

<br />

### 2. 단축 속성

단축 속성이란, 각 방향을 한 번에 적용해주는 단축키와 같은 속성을 말한다.

```css
margin: 10px;
```

`top`, `right`, `bottom`, `left`: 10px

<br />

```css
margin: 10px 20px;
```

`top`, `bottom`: 10px<br />
`left`, `right`: 20px

<br />

```css
margin: 10px 20px 30px;
```

`top`: 10px<br />
`left, right`: 20px<br />
`bottom`: 30px

<br />

```css
margin: 10px 20px 30px 40px;
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
margin-top: 10px;
margin-bottom: 20px;
margin-left: 30px;
margin-right: 40px;
```

<br />

```toc

```
