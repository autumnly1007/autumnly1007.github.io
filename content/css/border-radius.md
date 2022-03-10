---
emoji:
title: '[CSS] border-radius'
date: '2022-03-10 22:00:00'
author: 안가을
tags: web css border radius
categories: CSS
---

## 💙 border-radius

요소의 모서리를 둥글게 깎는 것을 의미한다.

- 기본값: `0` - 둥글게 없음
- 단위: px, em, vw 등 단위로 지정

<br />

```css
div {
  width: 100px;
  height: 100px;
  background-color: orange;
  border-radius: 10px;
}
```

해당 요소의 각 모서리에 반지름이 10px 인 동그라미를(정 원을) 배치한 후,<br />
요소에서 동그라미를 벗어나는 부분을 삭제하는 원리이다.

<br />

```css
border-radius: 0 10px 0 0;
```

`왼쪽 위` - `오른쪽 위` - `오른쪽 아래` - `왼쪽 아래` 의<br />
시계 방향 순서로 적용할 수 있다.

```toc

```
