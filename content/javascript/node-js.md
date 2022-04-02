---
emoji:
title: '[JS] Node.js'
date: '2022-03-29 20:30:00'
author: 안가을
tags: web js javascript node
categories: JS
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

전 세계의 개발자들이 만든 다양한 기능(패키지, 모듈) 들을 관리하기 위한 도구이다.<br />
Node.js 에서 사용하는 여러가지 기능들을 패키지(모듈)로 만들어 모아놓은 저장소이면서,<br />
패키지를 설치하고 관리할 수 있는 CLI(Coimmand Line Interface) 도 제공한다.

Node.js 설치 시 함께 설치되기 때문에,
Node.js 설치 후 버전 확인을 할 때 npm 도 함께 해주는 것이 좋다.

기존에는 html의 link, script 태그를 통해 import 하는 방식을 사용하였지만<br />
현재는 패키지를 설치하는 방식을 많이 사용하고 있다.<br />

이러한 방식은 기존의 방식보다는 학습 난이도가 증가하고 구성이 복잡하지만<br />
관리 효율이 증가하고 손쉽게 기능을 고도화할 수 있는 Trade-off 가 발생한다.

<br />

[npm 버전확인]

```powershell
npm -v
npm --version
```

<br />

[모듈 설치방법]

```powershell
# 일반 의존성 설치
npm install [Package 이름]

npm install [Package 이름]@[설치할 특정 버전]
```

- node_modules 폴더 하위에 해당 패키지가 생성됨
- 해당 패키지가 개발을 할 때 필요하면서, 웹 브라우저에서 직접적으로 동작하는 경우 사용
- package.json 파일에 dependencies 로 추가됨

<br />

```powershell
# 개발용 의존성 패키지 설치
npm install [Package 이름] -D (--save-dev)
```

- node_modules 폴더 하위에 해당 패키지가 생성됨
- 해당 패키지가 개발을 할 때에만 필요한 경우 사용 (웹 브라우저에서 직접적으로 동작하지 않는 경우)
- package.json 파일에 devDependencies 로 추가됨

<br />

[초기화: package.json 파일 생성]

```powershell
npm init -y
```

<br />

[설치된 모듈의 정보 확인]

```powershell
npm info [Package 이름]
```

<br />

[모듈 버전 업데이트]

```powershell
npm update [Package 이름]
```

package.json 파일에서 업데이트 하려는 모듈의 버전 앞에 ^(캐롯) 기호가 명시되어 있어야 한다.<br />
이 기호는 npm update 를 통해 최신 버전으로 업데이트 할 수 있다는 것을 의미한다.

<br />

### 3. NVM (Node Version Manager)

Node.js 의 버전을 관리하는 도구이다.<br />
여러 개의 Node.js 를 설치할 수 있게 해주고,<br />
개발 환경에 따라서 필요한 Node.js 버전으로 전환을 가능하게 해준다.

<br />

[NVM 설치방법]

```powershell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

<br />

[NVM 버전확인]

```powershell
# 쉘 환경 재시작 후 진행
source ~/.zshrc

nvm -v
nvm --version
```

<br />

[Node.js 설치방법]

```powershell
nvm install [Node.js 버전]
```

<br />

[Node.js 설치된 버전의 목록확인]

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

<br />

### 4. package.json

```powershell
{
  # 프로젝트명 (기본값: 디렉토리명)
  "name": "test",

  # 프로젝트 버전
  "version": "1.0.0",

  # 프로젝트 설명
  "description": "",

  # 프로젝트를 패키지로 만들어 npm 에 업로드하는 경우 사용 (웹에서는 필요없음)
  # 모듈 활용 시, js 파일에서 import 변수명 from 'index';
  "main": "index.js",

  # 프로젝트 내부에서 사용하는 명령어
  # npm run [script 명령어]
  "script": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  # 키워드
  "keywords": [],

  # 소유주
  "author": "",

  # 라이센스
  "license": "ISC"
}
```

npm install 을 이용해 패키지를 설치하면 package.json 파일에<br />
해당 패키지의 이름과 버전이 자동으로 추가된다.

만약 node_modules 폴더가 삭제되더라도 (패키지가 삭제되더라도)<br />
package.json 파일에 설치했던 패키지의 내용들이 있기 때문에<br />
`npm i (install)` 명령어를 사용하면 패키지들을 재설치할 수 있다.

<br />

### 5. package-lock.json

package.json 파일에 명시되어져 있는 모듈들이<br />
내부적으로 사용하는 또 다른 모듈들의 정보가 작성되어져 있다.<br />
자동으로 관리되기 때문에 따로 수정할 필요가 없다.

```toc

```
