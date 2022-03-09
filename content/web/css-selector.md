---
emoji:
title: CSS 선택자
date: '2022-03-09 15:00:00'
author: 안가을
tags: web css
categories: WEB
---

## 💙 CSS 선택자

### 1. 전체선택자 (Universal Selector)

```css
* {
  color: blue;
}
```

모든 요소를 선택한다.

### 2. 태그 선택자 (Type Selector)

```css
li {
  color: blue;
}
```

태그 이름으로 요소를 선택한다.

### 3. 클래스 선택자 (Class Selector)

```html
<li class="blue">파랑</li>
```

```css
.blue {
  color: blue;
}
```

HTML class 속성의 값으로 요소를 선택한다.

### 4. 아이디 선택자 (ID Selector)

```html
<li id="blue">파랑</li>
```

```css
#blue {
  color: blue;
}
```

HTML id 속성의 값으로 요소를 선택한다.

### 5. 일치 선택자 (Basic Combinator)

```html
<span class="blue">파랑</span>
```

```css
span.blue {
  color: blue;
}
```

선택자 A 와 B 를 동시에 만족하는 요소를 선택한다.

### 6. 자식 선택자 (Child Combinator)

```html
<ul>
  <li class="blue">파랑</li>
</ul>
```

```css
ul > .blue {
  color: blue;
}
```

선택자 A 의 자식 요소인 B 를 선택한다.

### 7. 하위 선택자 (Descendant Combinator)

```html
<div>
  <ul>
    <!-- div .blue -->
    <li class="blue">파랑</li>
  </ul>
  <!-- div .blue -->
  <span class="blue">파랑</span>
</div>
```

```css
div .blue {
  color: blue;
}
```

선택자 A 의 하위 요소인 B 를 선택한다.<br />
'띄어쓰기' 가 선택자의 기호이다.

### 8. 인접 형제 선택자 (Adjacent Sibling Combinator)

```html
<ul>
  <li>빨강</li>
  <li>노랑</li>
  <li class="blue">파랑</li>
  <li>초록</li>
  <li>보라</li>
</ul>
```

```css
.blue + li {
  color: blue;
}
```

선택자 A 의 다음 형제 요소인 B 하나를 선택한다. // 초록

### 9. 일반 형제 선택자 (General Sibling Combinator)

```html
<ul>
  <li>빨강</li>
  <li>노랑</li>
  <li class="blue">파랑</li>
  <li>초록</li>
  <li>보라</li>
</ul>
```

```css
.blue ~ li {
  color: blue;
}
```

선택자 A 의 다음 형제 요소를 모두 선택한다. // 초록, 보라

```toc

```
