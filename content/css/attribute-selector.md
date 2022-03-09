---
emoji:
title: '[CSS] 속성 선택자'
date: '2022-03-09 15:50:00'
author: 안가을
tags: web css
categories: CSS
---

## 💙 속성 선택자 (Attribute Selector)

### 1. [attr]

```html
<input type="text" value="1234" disabled />
<!---->
<span data-cute-animal="cat">고양이</span>
```

```css
[disabled] {
  color: gray;
}

[data-cute-animal] {
  color: pink;
}
```

**[ABC]**<br />
속성 ABC 를 포함한 요소를 선택한다.

### 2. [attr="value"]

```css
[type='text'] {
  color: pink;
}
```

**[ABC="XYZ"]**<br />
속성 ABC 를 포함하면서 값이 XYZ 인 요소를 선택한다.

```toc

```
