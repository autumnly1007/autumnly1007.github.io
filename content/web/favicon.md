---
emoji:
title: 'favicon'
date: '2022-03-20 20:30:00'
author: 안가을
tags: web js web
categories: WEB
---

## favicon

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title</title>
    <!-- favicon 지정 없음 -->
  </head>
  <body></body>
</html>
```

favicon 을 따로 지정하지 않으면<br />
기본적으로 브라우저는<br />
루트 경로에 있는 favicon.ico 파일을 찾아서<br />
해당 페이지의 아이콘으로 사용한다.

```html
<link rel="icon" href="./favicon.png" />
```

다른 형식의 이미지 파일을 favicon 으로 사용할 때에는
link 태그로 지정해 주어야 한다.

```toc

```
