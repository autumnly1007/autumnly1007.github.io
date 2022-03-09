---
emoji:
title: '[CSS] 너비 (width, height)'
date: '2022-03-09 20:30:00'
author: 안가을
tags: web css
categories: CSS
---

## 💙 너비 (width, height)

요소의 가로/세로 너비를 의미한다.

### 1. auto

브라우저가 자동으로 너비를 계산한다.<br />
`width`, `height` 속성의 **기본값**이다.

<br />

### 2. 단위

`px`, `em`, `vw` 등 단위로 지정한다.<br />
보통 px 를 가장 많이 사용한다.

<br />

### 3. Inline 요소 (기본값)

- width: 포함한 **콘텐츠**의 크기만큼 자동으로 **줄어든다.**
- height: 포함한 **콘텐츠**의 크기만큼 자동으로 **줄어든다.**

<br />

### 4. Block 요소 (기본값)

- width: **부모 요소**의 크기만큼 자동으로 **늘어난다.**
- height: 포함한 **콘텐츠**의 크기만큼 자동으로 **줄어든다.**

<br />

### 5. max-width, max-height

요소가 커질 수 있는 **최대** 가로/세로 너비

- 기본값: `none` - 최대 너비 제한이 없다.
- 단위: px, em, vw 등 단위로 지정한다.

<br />

### 6. min-width, min-height

요소가 작아질 수 있는 **최소** 가로/세로 너비

- 기본값: `0` - 최소 너비 제한이 없다.
- 단위: px, em, vw 등 단위로 지정한다.

```toc

```
