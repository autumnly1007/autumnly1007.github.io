---
emoji:
title: '[CSS] flex'
date: '2022-03-14 22:00:00'
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

## 1. Flex Container

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

기본적으로 flex container 는<br />
한 줄에서 모든 아이템을 표시하려 시도함

- 기본값: `nowrap` - 묶음(줄 바꿈) 없음
- `wrap`: 여러 줄로 묶음
- `wrap-reverse`: wrap 의 반대 반향으로 묶음

<br />

### (4) justify-content

**주 축**의 정렬 방법

- 기본값: `flex-start` - Flex Items 를 시작점으로 정렬
- `flex-end`: Flex Items 를 끝점으로 정렬
- `center`: Flex Items 를 가운데 정렬
- `space-between`: 각 Flex Item 사이를 균등하게 정렬
- `space-around`: 각 Flex Item 의 외부 여백을 균등하게 정렬

<br />

### (5) align-content

**교차 축**의 **여러 줄** 정렬 방법

정렬이 가능한 여백이 있어야 하고<br />
아이템이 두 줄 이상이어야 동작한다. (flex-wrap: wrap)

이처럼 조건에 부합해야 동작하기 때문에,<br />
수직 정렬 시에는 align-content 보다는 **align-items** 를 더 많이 사용한다.

- 기본값: `stretch` - Flex Items 를 시작점으로 정렬<br />
  만약 item 의 너비를 명시하지 않으면 container 의 너비 만큼 늘어난다.
- `flex-start`: Flex Items 를 시작점으로 정렬
- `flex-end`: Flex Items 를 끝점으로 정렬
- `center`: Flex Items 를 가운데 정렬
- `space-between`: 각 Flex Item 사이를 균등하게 정렬
- `space-around`: 각 Flex Item의 외부 여백을 균등하게 정렬

<br />

### (6) align-items

**교차 축**의 **한 줄** 정렬 방법

- 기본값: `stretch` - Flex Items 를 교차 축으로 늘림
- flex-start: Flex Items 를 각 줄의 시작점으로 정렬
- flex-end: Flex Items 를 각 줄의 끝점으로 정렬
- center: Flex Items 를 각 줄의 가운데 정렬
- baseline: Flex Items 를 각 줄의 문자 기준선에 정렬

<br />

## 2. Flex Items

### (1) order

Flex Item 의 **순서**

html 구조를 바꾸지 않고도
화면에 출력되는 순서를 변경할 수 있음

- 기본값: 0 - 순서 없음
- 숫자: 숫자가 작을 수록 먼저 정렬됨

<br />

### (2) flex-grow

Flex Item 의 **증가** 너비 비율

컨테이너의 여백을 채우면서 아이템들 간의 비율을 설정할 수 있음

- 기본값: 0 - 증가 비율 없음 (아이템 자신의 크기 유지, 여백을 채우지 않음)
- 숫자: 증가 비율

```css
.item1 {
  ... /* flex-grow: 0 */
}
.item2 {
  ...
  flex-grow: 2;
}
.item3 {
  ...
  flex-grow: 1;
}
```

item2 는 item1 이 차지한 영역을 **제외한 영역**을<br />
item3 과 나누어서 2:1 의 비율로 차지하게 됨

<br />

### (3) flex-shrink

Flex Item 의 **감소 너비** 비율

컨테이너가 줄어들어서<br />
아이템들이 자신의 크기보다 작아지려고 할 때<br />
감소 너비가 적용되기 시작함

- 기본값: `1` - Flex Container 너비에 따라 감소 비율 적용
- 숫자: 감소 비율

flex-shink: `0` 으로 명시하게 되면,<br />
컨테이너가 줄어들어서 각각의 아이템들이 차지할 수 있는 공간이 없더라도<br />
그 아이템들의 **실제 너비만큼 크기를 유지**한다.

<br />

### (4) flex-basis

Flex Item 의 공간 배분 전 **기본** 너비

- 기본값: auto - 요소의 **Content 너비** (요소의 글자 만큼의 영역)
- 단위: px, em, rem 등 단위로 지정

```css
.item1 {
  flex-grow: 1;
  flex-basis: 0;
}
.item2 {
  flex-grow: 2;
  flex-basis: 0;
}
```

각 요소의 기본 너비를<br />
요소의 글자만큼의 너비가 아니라 0으로 설정해서<br />
요소들의 비율을 정확하게 1:2 로 만들 수 있다.

```toc

```
