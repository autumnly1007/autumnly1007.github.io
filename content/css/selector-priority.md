---
emoji:
title: '[CSS] 선택자 우선순위'
date: '2022-03-09 18:30:00'
author: 안가을
tags: web css
categories: CSS
---

## 💙 선택자 우선순위

<br />

우선순위란, 같은 요소가 여러 선언의 대상이 된 경우,<br />
어떤 선언의 **CSS 속성을 우선적으로 적용**할 지 결정하는 방법이다.

`1` **점수**가 높은 선언의 우선순위가 높다.<br />
`2` 점수가 같다면, 가장 **마지막에 해석**된 (나중에 작성된) 선언의 우선순위가 높다.<br />

<br />

### 1. 점수가 높은 선언의 우선순위가 높다.

```html
<div
  id="color_yellow" '
  class="color_green"
  style="color: orange;"> <!-- Inline style 선언 -->
  Hello, world!
</div>
```

```css
div {
  color: red !important;
}

#color_yellow {
  color: yellow;
}

.color_green {
  color: green;
}

div {
  color: blue;
}

* {
  color: darkblue;
}

body {
  color: violet; // 글자 속성 => 상속 가능
}
```

<br />

각 CSS 선택자에 예를 든 점수별로 순위를 매겨보면 아래와 같다.<br />
(CSS 우선순위의 점수를 계산하는 것을 명시도라고 부른다.)

`1` **important** (9999999999점)<br />
`2` **Inline** style 선언 (1000점)<br />
`3` **ID** 선택자 (100점)<br />
`4` **Class** 선택자 (10점)<br />
`5` **Tag** 선택자 (1점)<br />
`6` **\*(전체)** 선택자 (0점)<br />
`7` 상속 => 상속이 가능하지만 별도로 점수를 계산하지 않음<br />

> 따라서 위의 코드에서는 !important 키워드를 사용한 red 컬러의 색상이 적용된다.

<br />

#### [우선순위 점수 계산 예시]

```css
.list li.item {
}
```

> Class + Tag + Class<br />
> 10 + 1 + 10 = 21 점

```css
.list li:hover {
}
```

> Class + Tag + Class<br />
> 10 + 1 + 10 = 21 점<br />
> hover => 가상 클래스! 선택자

```css
.box::before {
}
```

> Class + Tag<br />
> 10 + 1 = 11 점<br />
> before => 가상 요소! 선택자 => 태그 선택자<br />
> 요소와 태그는 다른 개념이긴 하지만 혼용해서도 많이 부른다.

```css
#submit span {
}
```

> ID + Tag<br />
> 100 + 1 = 101 점

```css
header .menu li:nth-child(2) {
}
```

> Tag + Class + Tag + Class<br />
> 1 + 10 + 1 + 10 = 22 점

```css
h1 {
}
```

> Tag<br />
> 1 점

```css
:not(.box) {
}
```

> Class (.box)<br />
> 10 점 <br />
> not 은 해당 요소를 부정하는 것이기 때문에<br />
> 가상 클래스! 선택자이긴 하지만, 점수로 계산하지 않는다.

<br />

### 2. 점수가 같다면, 가장 마지막에 작성된 선언의 우선순위가 높다.

```css
.hello {
  color: yellow;
}

.hello {
  color: orange;
}
```

> 선택자가 같다 == 점수가 같다.<br />
> 이 경우, 가장 마지막에 작성된 orange 색상이 적용된다.

```css
div.hello {
  color: yellow;
}

.hello {
  color: orange;
}
```

> .hello 선택자가 더 마지막에 작성되었더라도,<br />
> div.hello 선택자의 점수가 더 높기 때문에 yellow 색상이 적용된다.

<br />

### 3. Inline Style 과 !important

`1` Inline style<br />
별도의 CSS 파일에서 수정이 불가능하고<br />
수정을 하기 위해서 해당 코드를 직접 찾아야 하기 때문에, <br />
되도록 사용하지 않는 것이 좋다.

`2` !important<br />
!important 가 적용된 스타일을 다른 방식으로 수정하는 것은 불가능하다.<br />
결국 또 다시 !important 를 추가하게 되기 때문에, 되도록 사용하지 않는 것이 좋다.

```toc

```
