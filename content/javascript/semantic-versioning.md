---
emoji:
title: '[JS] 유의적 버전'
date: '2022-04-02 22:00:00'
author: 안가을
tags: web js javascript node version
categories: JS
---

## 💙 유의적 버전 (Semantic Versioning, SemVer)

```powershell
> node --version
v14.17.6
```

여기서 버전의 숫자들은 각각 아래의 의미를 나타낸다. <br />

`14`.`17`.`6`<br />
**Major**.**Minor**.**Patch**<br />

<br />

### 1. Major

기존 버전과 호환되지 않는 `새로운 버전` <br />
(예: Windows OS)

<br />

### 2. Minor

기존 버전과 호환되는 새로운 `기능이 추가된 버전`

<br />

### 3. Patch

기존 버전과 호환되는 `버그 및 오타 등이 수정된 버전`

<br />

### 4. ^Major.Minor.Patch

Major 버전 안에서 가장 최신 버전으로 업데이트 가능<br />
package.json 파일에서 업데이트 하려는 모듈의 버전 앞에 ^(캐롯) 기호가 명시되어 있어야 한다.<br />
이 기호는 npm update 를 통해 최신 버전으로 업데이트 할 수 있다는 것을 의미한다.<br />

<br />

참고: https://semver.org/lang/ko/

```toc

```
