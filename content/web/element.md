---
emoji:
title: HTML Elements
date: '2022-03-08 23:00:00'
author: 안가을
tags: html element
categories: WEB
---

## 💙 여러가지 HTML 요소들

### 1. div

```html
<div>
  <h1>제목</h1>
  <p>문장...</p>
</div>
```

Block 요소<br />
특별한 의미가 없는 구분을 위한 요소 (Division)

<br />

### 2. h1

```html
<h1>제목1</h1>
<h2>제목2</h2>
<h3>제목3</h3>
<h4>제목4</h4>
<h5>제목5</h5>
<h6>제목6</h6>
```

Block 요소<br />
제목을 의미하는 요소 (Heading)<br />

중요도를 숫자로 명시하여 사용하며 (h1 ~ h6)<br />
숫자가 작을수록 더 중요한 제목을 의미한다.

<br />

### 3. p

```html
<p>오늘도 행복한 하루 되세요.</p>
```

Block 요소<br />
문장을 의미하는 요소 (Paragraph)

<br />

### 4. img

```html
<img src="img/cat.jpg" alt="cats" />
```

Inline 요소<br />
이미지를 삽입하는 요소 (Image)

- src: 삽입할 이미지의 경로 (필수 속성)
- alt: 삽입할 이미지의 이름 (필수 속성) / 대체 텍스트

<br />

### 5. ul / li

```html
<ul>
  <li>강아지</li>
  <li>고양이</li>
  <li>토끼</li>
</ul>
```

#### (1) ul

- Block 요소<br />
- 순서가 필요없는 목록의 집함을 의미한다. (Unordered List)

#### (2) li

- Block 요소<br />
- 목록 내의 각 항목을 의미한다. (List Item)

<br />

### 6. a

```html
<a href="https://www.naver.com" target="_blank">NAVER</a>
```

Inline 요소<br />
다른/같은 페이지로 이동하는 하이퍼링크를 지정하는 요소 (Anchor: 닻)

- href: 링크 URL (Hypertext Reference)
- target: 링크 URL 의 표시 위치 (\_blank: 새 탭)

<br />

### 7. span

```html
<span>고양이</span>
```

Inline 요소<br />
특별한 의미가 없는 구분을 위한 요소

<br />

### 8. br

줄바꿈 요소 (Break)

<br />

### 9. input

```html
<input type="text" value="hello!" disabled />
```

Inline-block 요소<br />
사용자가 데이터를 입력하는 요소

- type: 입력받을 데이터의 타입
- value: 미리 입력된 값(데이터)
- placeholder: 사용자가 입력할 값(데이터)의 힌트
- disabled: 입력 요소 비활성화
- label: 라벨링이 가능한 요소(input)의 제목

#### type="radio"

```html
<label> <input type="radio" name="animals" />Cat</label>
<label> <input type="radio" name="animals" />Dog</label>
```

- 사용자에게 체크 여부를 그룹에서 1개만 입력 받음
- name 속성의 값을 동일하게 지정하면 하나의 그룹으로 묶여짐

#### type="checkbox"

```html
<label> <input type="checkbox" checked />Cat</label>
```

- 사용자에게 체크 여부를 다중으로 입력 받음
- checked 속성을 지정하여 미리 체크를 해놓을 수 있음

<br />

### 10. table

```html
<table>
  <tr>
    <td>A</td>
    <td>B</td>
  </tr>
  <tr>
    <td>C</td>
    <td>D</td>
  </tr>
</table>
```

table 요소<br />
행(row)과 열(column)의 집합

- tr: 행을 의미
- td: 열을 의미

```toc

```
