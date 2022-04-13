---
emoji:
title: '[JS] 문자 (String)'
date: '2022-04-10 22:10:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 문자 (String)

### 1. String

```js
const char = String(123); // '123'
const obj = new String(123); // String {"123"}
```

String 은 전역 객체이며 문자열의 생성자이다. <br />

```js
const char1 = '123';
const char2 = `123`;
```

하지만 리터럴 방식으로 문자열을 만드는 것이 훨씬 간단하기 때문에 보통은 리터럴 방식을 사용한다.

<br />

### 2. String.prototype.indexOf()

호출한 String 객체에서 주어진 값과 알치히는 첫 번째 인덱스를 반환한다.<br />
일치하는 값이 없으면 -1 을 반환한다.

```js
const result = 'Hello world!'.indexOf('world');
console.log(result); // 6

const result = 'Hello world!'.indexOf('cat');
console.log(result); // -1
```

<br />

### 3. String.length

문자열의 길이를 반환한다.

```js
const char = 'abc';
console.log(char.length); // 3
```

<br />

### 4. String.prototype.slice()

문자열의 일부를 추출하면서 새로운 문자열을 반환한다.<br />
첫 번째 인수로는 0부터 시작하는 인덱스를, 두 번째 인수로는 종료할 인덱스를 전달한다.<br />

중요한 점은 종료할 인덱스의 **이전**까지 반환된다는 것이다.<br />
종료할 인덱스를 생략하면 문자열의 마지막까지 반환된다.

```js
const str = 'Hello world!';
console.log(str.slice(6, 11)); // world
```

<br />

### 5. String.prototype.replace()

문자 또는 문자열을 교체하여 반환한다.

```js
const str = 'Hello world!';
console.log(str.replace(' world!', '')); // Hello
```

<br />

### 6. String.prototype.match()

특정한 정규표현식과 매치되는 문자열을 가진 배열을 반환한다.<br />
배열의 첫 번째 데이터는 정규표현식과 매치되는 문자열이다.

```js
const str = 'autumn@gmail.com';
console.log(str.match(/.+(?=@)/)); // ["autumn", index: 0, input: ...]
console.log(str.match(/.+(?=@)/)[0]); // autumn
```

<br />

### 7. String.prototype.trim()

문자열 양쪽 끝의 공백을 제거하여 반환한다.<br />
공백은 space, tab, nbsp 을 의미한다.

```js
const str = '   Hello world  ';
console.log(str.trim()); // Hello world
```

```toc

```
