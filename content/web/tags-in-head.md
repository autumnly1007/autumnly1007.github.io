---
emoji:
title: 정보를 의미하는 태그 (title, link, style, script, meta)
date: '2022-03-07 18:00:00'
author: 안가을
tags: web
categories: WEB
---

## 💙 정보를 의미하는 태그

### 1. \<title>\</title>

```html
<title>Title</title>
```

<br />

HTML 문서의 **제목**을 정의하는 태그<br />
웹 브라우저의 탭에 정의한 제목이 표시된다.

### 2. \<link>

```html
<link rel="stylesheet" href="./main.css" />

<link rel="icon" href="./favicon.png" />
```

<br />

외부 문서를 가져와 **연결**할 때 사용한다. (대부분 CSS 파일)

- rel: 가져올 외부 문서와 현재 HTML 간의 관계를 명시한다. (필수 속성)
- href: 가져올 문서의 경로

> favicon (파비콘) 은 Favorite Icon 의 줄임말이다.<br />
> 주로 favicon.ico, favicon.png 파일이 사용된다.

### 3. \<style>\</style>

```html
<style>
  div {
    color: white;
  }
</style>
```

<br />

**스타일**(CSS) 를 HTML 문서 안에서 작성하는 경우에 사용한다.

### 4. \<script>\</script>

```html
<!-- 자바스크립트 파일을 외부에서 가져오는 경우 -->
<script src="./main.js"></script>

<!-- 자바스크립트를 HTML 문서 안에서 작성하는 경우 -->
<script>
  console.log('Hello world!');
</script>
```

<br />

**자바스크립트** 파일을 외부에서 가져오거나<br />
HTML 문서 안에서 작성하는 경우에 사용한다.<br />

- scr: source 의 약어. 사용할 소스 코드(파일)를 지정하는 HTML 속성

### 5. \<meta>

```html
<!-- 문자 인코딩 방식 -->
<meta charset="UTF-8" />

<!-- name: 정보의 종류 / content: 정보의 값 -->
<meta name="author" content="autumn" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

<br />

앞에서 살펴본 태그들로는 표시할 수 없는<br />
HTML 문서(웹 페이지)의 제작자, 내용, 키워드 같은<br />
여러 **정보**를 검색엔진이나 브라우저에게 제공한다.

meta 태그의 name 속성에는 **정보의 종류**를, content 속성에는 그 **정보의 값**을 명시한다.

- **charset**(Character set 단어의 약어)은 문자 인코딩 방식을 지정하는 HTML 속성이다.<br />
  문자 인코딩이란 문자나 기호들을 컴퓨터가 이용할 수 있는 신호로 만드는 것을 말하며<br />
  대표적으로 한글 사용에서는 EUC-KR, UTF-8 등이 사용되며, 웹에서는 UTF-8 의 사용이 권장된다.

- **모바일**에서 웹 페이지의 가로 너비를 모바일 환경의 가로 너비와 일치시키거나<br />
  웹 사이트가 처음 출력될 때 확대/축소 여부나 정도를 어떻게 결정할 것인지 등에 대한 정보를<br />
  META 태그로 명시하는 개념이 name="viewport" 의 내용이다.

```toc

```
