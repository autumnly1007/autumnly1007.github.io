---
emoji:
title: .gitignore
date: '2022-04-03 13:00:00'
author: 안가을
tags: web
categories: WEB
---

## 💙 .gitignore

```ignore
node_modules/
dist/
.cache/
...
```

프로젝트 최상단에 .gitignore 파일을 생성한다.<br />
해당 파일에서 git 에서 버전관리를 무시할 폴더나 파일들을 명시해 주면 된다.<br />

대표적으로 node_modules 폴더는 용량이 매우 크고,<br />
npm i (install) / npm run dev(build) 명령을 통해 재설치할 수 있기 때문에 굳이 버전관리를 할 필요가 없다.
