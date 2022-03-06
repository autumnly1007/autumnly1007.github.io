---
emoji:
title: 웹 애플리케이션의 동작 원리
date: '2022-03-06 02:00:00'
author: 안가을
tags: web
categories: WEB
---

## 💙 웹 애플리케이션의 동작 원리

브라우저를 통해서 접속할 수 있는 사이트들은 기본적으로 이러한 구조로 동작한다.

### 1. 최초 요청 (Request)

**사용자**가 자신의 컴퓨터에서 브라우저를 통해 주소창에 **프로토콜**과 **사이트 주소**를 입력함으로써<br />
해당하는 사이트의 주소에 맞는 서버로 최초로 요청을 한다.

`예: https://autumnly1007.github.io/`

- 통신 프로토콜 (Communication Protocol, 통신 규약)<br />
  컴퓨터나 원거리 통신 장비 사이에서 메시지를 주고 받는 양식 및 규칙의 체계<br />
  (HTTP, HTTPS, FTP, SSL 등)

### 2. 최초 응답 (Response)

요청을 받은 **서버**에서는 요청이 들어온 사용자의 브라우저로 최초로 응답을 한다.<br />
기본적인 웹 사이트의 구조를 담고 있는 **HTML** 파일을 사용자에게 보낸다.

### 3. 추가 요청

HTML 파일을 전달받아 화면에 보여질 기본적인 구조들을 확인할 수 있다.<br />
HTML 파일에는 그 구조에 맞게 추가적으로 작성되어져 있는 CSS, JS, 이미지 파일들이 명시되어져 있으며<br />
이러한 파일들을 서버에 추가적으로 요청한다.

### 4. 추가 응답

서버에서는 새로 요청받은 파일들(CSS, JS, 이미지 파일)을 추가적으로 보낸다.

<br />

> 개발자가 자신의 컴퓨터에서 만들어진 결과물을 서버에 업로드하고 서버의 주소를 설정한다.<br />
> 그 이후에는 그 주소로 접근하는 모든 사람들에게 이러한 동작 원리에 의해 웹 사이트를 보여줄 수 있다.

```toc

```