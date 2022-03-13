---
emoji:
title: '[CSS] 배경'
date: '2022-03-13 16:50:00'
author: 안가을
tags: web css background
categories: CSS
---

## 💙 배경 관련 속성

### 1. background-color

요소의 **배경 색상**<br />
배경 색상은 배경 이미지보다 뒤에 출력됨

- 기본값: transparent - 투명함
- 색상: 지정 가능한 색상

<br />

### 2. background-image

요소의 **배경 이미지 삽입**

- 기본값: none - 이미지 없음
- url("경로"): 이미지 경로 (따옴표를 붙이는 것이 좋음)

<br />

### 3. background-repeat

요소의 **배경 이미지 반복**

- 기본값: repeat - 이미지를 수직, 수평 반복
- repeat-x: 이미지를 수평 반복
- repeat-y: 이미지를 수직 반복
- no-repeat: 반복 없음

<br />

### 4. background-position

요소의 **배경 이미지 위치**<br />
보통 방향, 단위로 지정한다.

- 기본값: 0% 0% - 0% ~ 100% 사이 값
- 방향: top, bottom, left, right, center 방향
- 단위: px, em, rem 등 단위로 지정

```css
.item {
  background-color: pink;
  background-image: url('./images/logo.png');
  background-repeat: no-repeat;
  background-position: top right; /* 우측 상단에 배치 */
}
```

```css
background-position: center; /* 정 가운데에 배치 */
```

```css
background-position: 100px 30px; /* x축 100px, y축 30px 에 배치 */
```

<br />

### 5. background-size

요소의 **배경 이미지 크기**

- 기본값: auto - 이미지의 **실제 크기**
- 단위: px, em, rem 등 단위로 지정
- cover: 비율을 유지, 요소의 가로/세로 너비 중 더 **넓은** 너비에 맞춤
- contain: 비율을 유지, 요소의 가로/세로 너비 중 더 **짧은** 너비에 맞춤

```css
/* 가로 150px, 세로 150px */
background-size: 150px 150px;
```

```css
/* 가로, 세로 사이즈 중 하나만 명시하면, 자동으로 비율에 맞게 출력됨 */
background-size: 100px;
```

<br />

### 6. background-attachment

요소의 **배경 이미지 스크롤 특성**

- 기본값: scroll - 이미지가 요소를 따라서 같이 스크롤
- fixed: 이미지가 뷰포트에 고정, 스크롤 X (위치가 변경될 때 이미지의 일부만 출력될 수 있음)
- local: 요소 내 스크롤 시 이미지가 같이 스크롤

```css
body {
  height: 3000px;
}

.item {
  ...
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
```

fixed 로 인해 배경 이미지가 뷰포트에 고정되면서<br />
cover 는 요소가 아니라, 뷰포트의 더 넓은 너비에 맞춰짐

```toc

```
