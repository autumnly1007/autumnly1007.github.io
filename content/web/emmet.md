---
emoji:
title: Emmet 을 이용해 태그 작성하기
date: '2022-03-08 21:00:00'
author: 안가을
tags: html emmet
categories: WEB
---

## 💙 Emmet

Emmet(에밋)은 HTML, XML 등의 문서를 편집할 때<br />
더욱 빠르게 코딩하기 위해서 사용되는 플러그인이다.

간단하게 태그 이름만 명시하고 **탭키**를 눌러서 **요소를 자동으로 완성**하는 것은,<br />
이 emmet 이라는 기능의 도움을 받고 있는 것이다.

<br />

예를 들어, div 까지만 작성하고 탭 키를 누르면

```html
<div></div>
```

완전한 div 태그가 작성된다.

<br />

또는
div.box 까지만 작성하고 탭 키를 누르게 되면

```html
<div class="box"></div>
```

클래스 속성까지 빠르게 작성할 수 있다.

<br />

이것은 css 에서도 동일하게 적용이 가능하다.<br />
예를 들어 w:200, bc:orange 을 각각 작성하고 탭 키를 누르면

```css
width: 200px;
background-color: orange;
```

으로 작성할 수 있다.

<br />

이처럼 emmet 문법은 **html, css** 에 적용이 가능하다.<br />

특히 html 에서 작성하는 emmet 문법은, css 선택자를 활용해서 사용할 수 있기 때문에<br />
아래처럼 더욱 복잡한 구조의 emmet 을 사용할 수 있다.

예: div>ul>li\*4{$}<br />

```html
<div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
</div>
```

```toc

```
