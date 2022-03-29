---
emoji:
title: '[JS] Node.js'
date: '2022-03-29 20:30:00'
author: 안가을
tags: web js javascript node
categories: WEB
---

## 💙 Node.js

### 1. Node.js

Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임이다.<br />
런타임이란 프로그래밍 언어가 동작하는 환경을 말한다.<br />

브라우저를 제어하기 위해 JavsScript 언어를 사용하는 것 처럼,<br />
컴퓨터 제어하기 위해, 웹 페이지 개발에 도움을 받기 위해 Node.js 를 사용한다.

웹 페이지를 더욱 효율적으로 만들기 위한 sass, less, babel 과 같은 모듈들은<br />
브라우저에서 직접적으로 동작할 수 없기 때문애<br />
일단 Node.js 환경에서 모듈을 이용해 개발하고,<br />
그 후에 브라우저에서 동작될 수 있도록<br />
Node.js 가 html, css, js 로 소스코드를 변환해준다.

<br />

[Node.js 설치]<br />
https://nodejs.org/ko/<br />

위 사이트에 접속하여 LTS 버전을 설치한다.

> LTS (Long Term Supported) 는 장기적으로 안정되고 신뢰도가 높은 지원이 보장되는 버전으로,<br />
> 유지/보수와 보안(서버 운영 등)에 초점을 맞춰 대부분 사용자에게 추천되는 버전이다.

<br />

[Node.js 버전확인]

```powershell
node -v
node --version
```

<br />

### 2. NPM (Node Package Manager)

자바스크립트 런타임 환경인 Node.js 의 패키지 관리 도구이다.<br />
Node.js 에서 사용하는 여러가지 모듈들을 패키지로 만들어 모아놓은 저장소이면서,<br />
패키지를 설치하고 관리할 수 있는 CLI(Coimmand Line Interface) 도 제공한다.

Node.js 설치 시 함께 설치되기 때문에,
Node.js 설치 후 버전 확인을 할 때 npm 도 함께 해주는 것이 좋다.

<br />

[npm 버전확인]

```powershell
npm -v
npm --version
```

[모듈 설치방법]

```powershell
npm install [Package 이름]
```

<br />

### 3. NVM (Node Version Manager)

Node.js 의 버전을 관리하는 도구이다.<br />
여러 개의 Node.js 를 설치할 수 있게 해주고,<br />
개발 환경에 따라서 필요한 Node.js 버전으로 전환을 가능하게 해준다.

<br />

[Node.js 설치방법]

```powershell
nvm install [Node.js 버전]
```

<br />

[Node.js 버전확인]

```powershell
nvm ls
```

<br />

[Node.js 버전선택]

```powershell
nvm use [Node.js 버전]
```

<br />

[Node.js 삭제]

```powershell
nvm uninstall [Node.js 버전]
```

```toc

```
