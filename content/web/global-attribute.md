---
emoji:
title: 전역 속성
date: '2022-03-09 13:00:00'
author: 안가을
tags: web
categories: WEB
---

## 💙 전역 속성

HTML 에서 속성이란<br />
열리는 태그에 작성하는 href, target, src 같은 HTML 의 기능을 확장해주는 개념이다.<br />

기본적으로 요소들은 자신이 **사용할 수 있는 속성이 정해져 있다.** (img태그: src, a태그: href 등)<br />
하지만 **전역 속성**은 body 에서 사용하는 태그들의 전체 영역에서 언제든지 사용할 수 있다.<br />

### 1.title

```html
<a href="https://naver.com" target="_blank" title="네이버로 이동">NAVER</a>
```

요소의 **정보**나 **설명**을 지정한다.<br />
해당 요소에 마우스를 올리면 일종의 tooltip 처럼 title 속성이 출력된다.

### 2. style

요소에 적용할 **스타일**을 지정한다.

### 3. class

요소를 지칭하는 **중복 가능**한 이름이다.<br />
css, js 에서 해당 요소를 제어하기 위해서 사용한다.

### 4. id

요소를 지칭하는 **중복이 불가능**한 고유한 이름이다.<br />
자주 사용하지는 않지만, 중요한 위치에 이름을 부여할 때에는 id 를 사용하는 것이 효율적이다.<br />
해당하는 요소를 빠르게 찾아서 제어할 수 있기 때문이다.

### 5. data

```html
<div data-cute-animal="cat">고양이</div>
<div data-cute-animal="dog">강아지</div>
```

\<div **data-이름="데이터"**>\</div> 형태로 사용하며,<br />
요소에 **데이터**를 지정할 수있다.

<br />

```js
const items = document.querySelectorAll('div');
items.forEach((item) => {
  console.log(item.dataset.cuteAnimal);
});

// cat
// dog
```

주의할 점은, javaScript 에서는 하이픈을 사용하는 이름 지정이 허용되지 않기 때문에<br />
data 속성 이름을 **카멜케이스**로 작성해야 한다는 것이다.

```toc

```
