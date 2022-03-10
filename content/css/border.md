---
emoji:
title: '[CSS] 테두리 선(border)과 색상표현'
date: '2022-03-10 21:40:00'
author: 안가을
tags: web css border
categories: CSS
---

## 💙 border

요소의 **테두리 선**을 지정하는 **단축 속성**이다.<br />
테두리 선의 두께가 늘어날수록 요소의 크기가 커진다.

<br />

### 1. border-width

요소 테두리 **선의 두께**를 의미한다.

- 기본값: `medium`
- 단위: px, em, % 등 **단위로 지정**
- thin(얇은 두께), thick(두꺼운 두께) 값이 있지만 잘 사용하지 않는다.
- border 라는 단축 속성의 **개별 속성**이면서,<br />
  각 방향별로 한번에 적용가능한 **단축 속성**이다.

```css
.item {
  border-width: 10px 20px 30px 40px;
}
```

<br />

### 2. border-style

요소 테두리 **선의 종류**를 의미한다.

- 기본값: `none` - 선 없음
- **solid**: 실선 (일반 선)
- **dotted**: 점선 (. . . .)
- **dashed**: 파선 (- - - -)
- double: 두 줄 선
- groove: 홈이 파여있는 모양
- ridge: 솟은 모양 (groove 의 반대)
- inset: 요소 전체가 들어간 모양
- outset: 요소 전체가 나온 모양

<br />

### 3. border-color

요소 테두리 **선의 색상**을 지정하는 **단축 속성**을 의미한다.

- 기본값: `black`
- 색상: 선의 색상
- transparent: 투명

```css
.item {
  border-color: black white orange yellow;
}
```

<br />

### 4. 단축 속성 예시

```css
.item {
  border: medium none black;
}
```

각각의 기본값을 단축 속성으로 사용한 것이다.<br />
선의 종류가 none 이기 때문에 출력되지 않는다.

```css
.item {
  border: 1px solid orange;
}
```

<br />

### 5. 기타 속성

요소의 테두리 선을 지정하는 기타 속성들이다.<br />
방향 별로 세밀하게 속성들을 설정한 수 있다.

```css
border-방향: 두께 종류 색상;
border-방향-width: 두께;
border-방향-style: 종류;
border-방향-color: 색상;
```

<br />

### 6. 색상 표현

색을 사용하는 모든 속성에 적용 가능한 색상 표현을 의미한다.

(1) 색상 이름

- 브라우저에서 제공하는 색상 이름
- 브라우저에 따라 달라지기 때문에 정확하지 않다.
- `red`, `tomato`, `royalblue` ...

<br />

(2) Hex 색상코드

- 16진수 색상 (Hexadecimal Colors)
- 가장 많이 사용하는 방식이다.
- `#000`, `#FFFFFF`

<br />

(3) RGB

- 빛의 삼원색
- `rgb(255, 255, 255)` // rgb 는 함수!

<br />

(4) RGBA

- 빛의 삼원색 + 투명도
- `rgba(0, 0, 0, 0.5)` // rgba 도 함수!
- 1, 2, 3 번째는 RGB, 마지막 4번째는 투명도이다.

```toc

```
