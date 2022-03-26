---
emoji:
title: '[CSS] 배치'
date: '2022-03-13 20:40:00'
author: 안가을
tags: web css position
categories: CSS
---

## 💙 배치 관련 속성

### 1. position

요소의 위치 지정 **기준**

- 기본값: static - 기준 없음
- relative: 요소 자신을 기준으로 함
- absolute: 위치 상 부모 요소를 기준으로 함
- fixed: 뷰포트(브라우저)를 기준으로 함
- sticky: 스크롤 영역을 기준으로 함

<br />

### 2. position 과 같이 사용하는 CSS 속성들<br />

모두 음수 사용 가능

- top
- bottom
- left
- right
- z-index

<br />

### 3. relative

**요소 자신**을 기준으로 배치한다.

```css
.child {
  width: 100px;
  height: 100px;
  background-color: pink;
  position: relative;
}
```

relative 라는 특정 기준이 부여되었지만 화면에는 아무런 변화가 없다.

```css
.child {
  width: 100px;
  height: 100px;
  position: relative;
  top: 30px;
  left: 60px;
}
```

자기 자신을 기준으로 위에서 30px, 왼쪽에서 60px 만큼 이동되어 출력된다.<br />

해당 요소의 기존 위치에는 요소가 차지했던 공간이 그대로 유지되기 때뮨에,<br />
요소를 원하는 위치에 옮기는 배치의 개념과는 거리가 있다.<br />

실제로 position: relative 를 사용하는 배치는 거의 사용되지 않는다.

<br />

### 4. absolute

**위치 상 부모 요소**를 기준으로 배치한다.

```html
<div class="parent">
  <div class="child">
    <div class="item"></div>
  </div>
</div>
```

```css
.parent {
  width: 300px;
  height: 300px;
  bakground-color: red;
  position: relative; /* .item 의 구조 상 상위요소 이면서, 위치 상 부모요소임 */
}

.child {
  width: 200px;
  bakground-color: orange;
  position: static; /* .item 의 구조 상 부모요소 이지만, 위치 상 부모요소가 아님 */
}

.item {
  width: 100px;
  bakground-color: yellow;
  position: absolute; /* 위치 상 부모요소 기준을 찾음 --> .parent */
  top: 30px;
  left: 60px;
}
```

**구조 상 상위 요소들 중에서,**<br />
**position: static 이 아닌 가장 가까운 상위 요소가 위치 상 부모요소**가 된다.<br />
(대부분의 경우에는 구조 상 부모요소와 위치 상 부모요소가 같다.)

부모 요소를 기준으로 배치되기 때문에 주변의 다른 요소들과는 상호작용할 필요가 없다.

`absolute`, `fixed` 는 기준이 **부모 요소**나 **뷰포트**이기 때문에<br />
기본적인 레이아웃 구조가 무너진다.

그렇기 때문에 구조 상의 부모 요소를 **위치 상의 부모 요소**로 만드는<br />
가장 무난한 값은 `relative` 가 된다.

<br />

### 5. fixed

뷰포트(브라우저)를 기준으로 배치한다.

뷰포트를 기준으로 배치되기 때문에 주변의 다른 요소들과는 상호작용할 필요가 없다.<br />

스크롤을 하더라도 뷰포트 기준으로 **위치가 고정**되기 때뮨에<br />
주로 **헤더**, **배너** 부분에 사용된다.

<br />

### 6. 요소 쌓임 순서 (Stack order)

어떤 요소가 **사용자와 더 가깝게 있는지 (위에 쌓이는지)** 결정

1. 요소에 `position` 속성의 **값이 있는 경우** 위에 쌓인다. (static 제외)
2. 1번 조건이 같은 경우, `z-index` 속성의 숫자 **값이 높을 수록** 위에 쌓인다.
3. 1번과 2번 조건이 같은 경우, `HTML`의 **다음 구조**일 수록 위에 쌓인다. (더 나중에 작성된 것)

```html
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>
```

```css
/* 1번째 */
.parent .child:nth-child(1) {
  position: relative;
  z-index: 1;
}

/* 2번째 */
.parent .child:nth-child(2) {
  position: absolute;
}

/* 3번째 */
.parent .child:nth-child(3) {
  position: fixed;
  z-index: 1;
}
```

요소 쌓임 순서: 2번째 - 1번째 - 3번째

<br />

### 7. z-index

요소의 쌓임 정도를 지정

- 기본값: auto (0) - 부모 요소와 동일한 쌓임 정도
- 숫자: 숫자가 높을 수록 위에 쌓임

z-index 값으로는 되도록 큰 숫자를 사용하지 않는 것이 좋다.<br />
나중에 다른 요소를 해당 요소보다 위에 쌓기 위해서 z-index 의 값이 계속해서 커지고,<br />
그렇게 되면 코드가 복잡해지고 관리가 어려워 지기 때문이다.

<br />

### 8. 요소의 display 가 변경됨

position 속성의 값으로 `absolute`, `fixed` 가 지정된 요소는,<br />
**display 속성이 block** 으로 변경된다.

```css
.text1 {
  display: block;
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 1;
}

.text2 {
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 1;
}
```

위의 두 요소는 같은 스타일을 가진다.<br />
.text2 에는 자동으로 display: block; 스타일이 적용된다.

<br />

> 일반적으로 Block 요소는 가로 너비가 최대한 늘어나려고 시도하지만,<br />
> position: fixed, absolute 로 지정된 경우에는<br />
> 가로 너비가 최소한으로 줄어들기 위해 시도한다.

```toc

```
