---
emoji:
title: 브라우저 스타일 초기화하기
date: '2022-03-08 20:30:00'
author: 안가을
tags: css reset
categories: WEB
---

## 💙 브라우저 스타일 초기화

기본적으로 HTML 요소들은 브라우저가 정해 놓은 CSS 스타일을 사용하게 된다.<br />
이 스타일은 브라우저 별로 유사하긴 하지만 조금씩 다른 값들을 가지고 있다.<br /><br />
그렇기 때문에 프로젝트를 시작하기 전에<br />
브라우저에서 기본적으로 제공하는 **CSS 스타일을 초기화** 하는 것이 좋다.

https://www.jsdelivr.com/package/npm/reset-css<br />
상단의 페이지로 접속해서 reset.min.css 파일을 HTML copy 해서 head 태그 안에 작성해주면 된다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
    <link rel="stylesheet" href="./main.css" />
  </head>
  <body></body>
</html>
```

<br />

여기서 주의할 점은, 추가적으로 연결할 css 파일은 <br />
반드시 스타일 초기화 css 보다 아래에서 작성되어야 한다는 것이다.<br /><br />
css link 는 작성한 순서대로 동작하기 때문에,<br />
위의 예제처럼 작성한다면 스타일 초기화 css 가 **가장 먼저 적용**된다.<br /><br />

> ### min (Minify)
>
> **파일명.min.확장자**와 같이 min 키워드는 파일이 **난독화**나 **경량화** 되었다는 것을 의미한다.<br />
> 즉 원본 파일을 용량이 가장 작은 형태로 압축해 놓은 버전이다.<br />
> 우리가 외부에서 가져와서 사용하는 플러그인, 라이브러리 등을 <br />
> 직접 수정할 상황은 매우 드물기 때문에 굳이 원본을 사용할 필요가 없다.

```toc

```
