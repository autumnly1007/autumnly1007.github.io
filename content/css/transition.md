---
emoji:
title: '[CSS] 전환 (transition)'
date: '2022-03-14 23:00:00'
author: 안가을
tags: web css transition
categories: CSS
---

## 💙 전환

### 1. transition

요소의 **전환(시작과 끝)** 효과를 지정하는 **단축 속성**

```css
transition: 속성명 지속시간 타이밍함수 대기시간;

/* 지속시간: 단축형으로 작성할 때, 필수 포함 속성임 */
```

```css
div {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: 1s; /* 1초, 전환효과가 지속되는 시간 */
}
div:active {
  width: 300px;
  background-color: pink;
}
```

<br />

### 2. transition-property

전환 효과를 사용할 **속성 이름**을 지정

- 기본값: all - 모든 속성에 적용
- 속성이름: 전환 효과를 사용할 속성 이름 명시

```css
div {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: width 1s; /* 전환 효과가 width 에만 적용됨 (색상 변화 부자연스러움) */
}
div:active {
  width: 300px;
  background-color: pink;
}
```

<br />

### 3. transition-duration

전환 효과의 **지속시간**을 지정

- 기본값: 0s - 전환효과 없음
- 시간: 지속시간(s) 을 지정

```css
div {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: width 0.5s; /* 전환 효과가 0.5 초 지속됨 (0 생략가능) */
}
div:active {
  width: 300px;
  background-color: pink;
}
```

```css
div {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: '
    width 0.5s
    , background-color 2s;
  /* 각 단축속성을 여러개 작성 */
}
```

<br />

### 4. transition-timing-function

전환 효과의 타이밍(Easing) 함수를 지정

- 기본값: `ease` - 느리게 - 빠르게 - 느리게 === cubic-bezier(0.25, 0.1, 0.25, 1)
- `linear`: 일정하게 === cubic-bezier(0, 0, 1, 1)
- `ease-in`: 느리게 - 빠르게 === cubic-bezier(0.42, 0, 1, 1)
- `ease-out`: 빠르게 - 느리게 === cubic-bezier(0, 0, 0.58, 1)
- `ease-in-out`: 느리게 - 빠르게 - 느리게
- `cubic-bezier(n, n, n, n)`: 자신만의 값을 정의 (0~1)
- `steps(n)`: n번 분할된 애니메이션

참고:<br />
https://easings.net/ko<br />
https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function

<br />

### 5. transition-delay

전환 효과가 몇 초 뒤에 시작할지 대기시간을 지정

- 기본값: 0s - 대기시간 없음
- 시간: 대기시간(s)을 지정

```css
div {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: 1s 0.5s; /* 0.5초 후에 전환 효과가 1초 지속됨 */
}
div:active {
  width: 300px;
  background-color: pink;
}
```

```toc

```
