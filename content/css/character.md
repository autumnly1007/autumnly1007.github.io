---
emoji:
title: '[CSS] 문자'
date: '2022-03-13 16:40:00'
author: 안가을
tags: web css character
categories: CSS
---

## 💙 문자 관련 속성

```html
<a href="https://google.com">Google</a>
```

```css
a {
  display: block;
  width: 200px;
  height: 100px;
  background-color: orange;
  font-size: 22px;
  color: white;
  text-decoration: none; /* a 태그의 기본 스타일인 밑줄 제거 */
  text-align: center; /* 수평 정렬 */
  line-height: 100px; /* 수직 정렬 */
}
```

### 1. color

글자의 **색상**

- 기본값: rgb(0, 0, 0) - 검정색
- 색상: 기타 지정 가능한 색상

### 2. text-align

문자의 **정렬 방식**

- 기본값: left - 왼쪽 정렬
- right: 오른쪽 정렬
- center: 가운데 정렬
- justify: 양쪽 정렬

### 3. text-decoration

문자의 **장식 (선)**

- 기본값: none (장식 없음)
- underline: 밑줄
- overline: 윗줄
- line-through: 중앙 선

### 4. text-indent

문자 첫 줄의 **들여쓰기**<br />
음수 사용 가능 (내어쓰기, outdent)

- 기본값: 0 - 들여쓰기 없음
- 단위: px, em, rem 등 단위로 지정

```toc

```
