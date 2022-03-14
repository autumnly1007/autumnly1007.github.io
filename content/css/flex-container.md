---
emoji:
title: '[CSS] flex'
date: '2022-03-13 21:40:00'
author: 안가을
tags: web css flex
categories: CSS
---

## 💙 flex (정렬)

```html
<!-- container -->
<div class="parent">
  <!-- items -->
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>
```

```css
.parent {
  display: flex;
}
```

display: flex; 가 부여된 요소를 container,<br />
container 의 자식 요소를 item 이라고 부른다.

또한 flex 는 container, item 에 부여하는 속성들이 각각 나누어져 있다.

<br />

## 1. flex container

### (1) display

Flex Container 의 화면 출력(보여짐) 특성

- `flex`: **블록** 요소와 같이 Flex Container 정의

  - 요소가 수직으로 쌓인다.
  - 부모 요소의 크기만큼 width 가 자동으로 늘어난다.
  - 자신이 포함한 콘텐츠의 크기만큼 height 가 자동으로 줄어든다.
  - width, height 가 지정한대로 적용된다.
  - margin, padding 이 정상적으로 적용된다.
  - 자식 요소로 Block, Inline 요소 모두 사용할 수 있다.

- `inline-flex`: **인라인** 요소와 같이 Flex Container 정의
  - 요소가 수평으로 쌓인다.
  - 자신이 포함한 콘텐츠의 크기만큼 width, height 가 자동으로 줄어든다.
  - width, height 를 지정해도 무시된다.
  - margin(요소의 외부여백), padding(요소의 내부여백)의<br />
    왼쪽/오른쪽 여백은 적용이 되지만, 위/아래 여백은 정상적으로 적용되지 않는다.
  - 자식 요소로 Block 요소를 사용할 수 없다.

<br />

### (2) flex-direction

주 축을 설정

- 기본값: `row` - **행 축 (좌 => 우)**<br />
  주 축은 수평축, 교차 축은 수직축<br />
  왼쪽 끝이 시작점(start), 오른쪽 끝이 끝점(end)<br />

- `row-reverse`: **행 축 (우 => 좌)**<br />
  주 축은 수평축, 교차 축은 수직축<br />
  오른쪽 끝이 시작점(start), 왼쪽 끝이 끝점(end)<br />

- `column`: **열 축 (위 => 아래)**<br />
  주 축은 수직축, 교차 축은 수평축<br />
  위쪽 끝이 시작점(start), 아래쪽 끝이 끝점(end)<br />

- `column-reverse`: **열 축 (아래 => 위)**<br />
  주 축은 수직축, 교차 축은 수평축<br />
  아래쪽 끝이 시작점(start), 위쪽 끝이 끝점(end)<br />

블록 요소는 기본적으로 요소가 수직으로 쌓이기 때문에,<br />
flex-direction: column 을 명시적으로 작성하는 경우가 흔하지는 않다.

<br />

### (3) flex-wrap

Flex Items 묶음(**줄 바꿈**) 여부

- 기본값: nowrap - 묶음(줄 바꿈) 없음
- wrap: 여러 줄로 묶음
- wrap-reverse: wrap 의 반대 반향으로 묶음

```toc

```
