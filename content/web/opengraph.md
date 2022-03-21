---
emoji:
title: 오픈 그래프
date: '2022-03-21 22:00:00'
author: 안가을
tags: web opengraph
categories: WEB
---

## 💙 오픈 그래프

### 1. 오픈 그래프 (The Open Graph protocol)

웹페이지가 소셜 미디어(카카오톡, 페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정할 수 있다.

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="사이트이름" />
<meta property="og:title" content="페이지이름" />
<meta property="og:description" content="페이지설명" />
<meta property="og:image" content="이미지주소" />
<meta property="og:url" content="페이지주소" />
...
```

- og:type: 페이지의 유형(E.g, website, video.movie)
- og:site_name: 속한 사이트의 이름
- og:title: 페이지의 이름(제목)
- og:description: 페이지의 간단한 설명
- og:image: 페이지의 대표 이미지 주소(URL)
- og:url: 페이지 주소(URL)

참고: https://ogp.me/

<br />

### 2. 트위터 카드 (Twitter Cards)

웹페이지가 트위터로 공유될 때 우선적으로 활용되는 정보를 지정할 수 있다.

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="사이트이름" />
<meta property="twitter:title" content="페이지이름" />
<meta property="twitter:description" content="페이지설명" />
<meta property="twitter:image" content="이미지주소" />
<meta property="twitter:url" content="페이지주소" />
...
```

- twitter:card: 페이지(카드)의 유형(E.g. summary, player)
- twitter:site: 속한 사이트의 이름
- twitter:title: 페이지의 이름(제목)
- twitter:description: 페이지의 간단한 설명
- twitter:image: 페이지의 대표 이미지 주소(URL)
- twitter:url: 페이지 주소(URL)

```toc

```
