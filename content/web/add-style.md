---
emoji:
title: 스타일 선언 방식
date: '2022-03-09 14:00:00'
author: 안가을
tags: web
categories: WEB
---

## 💙 style 의 선언 방식 네가지

### 1. 내장 방식

```html
<style>
  div {
    color: orange;
    margin: 20px;
  }
</style>
```

\<style>\</style> 의 내용으로 스타일을 작성하는 방식이다.

### 2. 인라인 방식

```html
<div style="color: orange; margin: 20px;"></div>
```

요소의 style 속성에 직접 스타일을 작성하는 방식이다. (선택자 없음)<br />
우선순위가 높아 유지보수에 악영향을 미치므로 사용이 권장되지 않는다.

### 3. 링크 방식

```html
<link rel="stylesheet" href="./css/main.css" />
```

\<link /> 로 외부 CSS 문서를 가져와서 연결하는 방식이다. (병렬 연결방식)

### 4. @import 방식

```css
@import url('./box.css');

div {
  color: orange;
  margin: 20px;
}
```

CSS의 @import 규칙으로 CSS 문서 안에서<br />
또 다른 CSS 문서를 가져와 연결하는 방식이다. (직렬 연결방식)

```toc

```
