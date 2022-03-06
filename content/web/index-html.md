---
emoji:
title: index.html
date: '2022-03-07 20:10:00'
author: 안가을
tags: web
categories: WEB
---

## 💙 index.html

```html
<!-- main.html -->
<a href="/about">About</a>
```

<br />

about - index.html<br />
main.html<br />

현재 프로젝트 디렉토리 구조가 위처럼 되어있는 경우<br />
main.html 에서 a 태그를 클릭하면!

주소창에는 아래와 같이 표시되고 해당 디렉토리로 이동하게 된다.<br />
`localhost:8000/about/`

하지만 about 폴더로 이동만 하는 것이 아니라,<br />
about **폴더 안에 있는 index.html 파일을 출력**하게 된다.<br />

이러한 동작이 가능한 이유는,<br />
**웹 브라우저는 디폴트로 index.html 라는 이름을 가진 파일을 우선적으로 읽어들이도록 되어있기 때문**에<br />
index.html 파일이 들어있는 폴더의 위치만 정확하게 명시해주면<br />
해당 파일을 찾아서 출력하기 위해 시도하기 때문이다.

```toc

```
