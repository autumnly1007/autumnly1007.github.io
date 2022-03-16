---
emoji:
title: '[CSS] 변환 (transform)'
date: '2022-03-16 20:30:00'
author: 안가을
tags: web css transform
categories: CSS
---

## 💙 변환

### 1. transform

요소의 **변환 효과**

```css
transform: 변환함수1 변환함수2 변환함수3...;
transform: 원근법 이동 크기 회전 기울임;
```

<br />

### 2. 2D 변환 함수

#### (1) **translate**

`이동` / px 단위 사용

- translate(x, y): 이동(x축, y축)
- translateX(x): 이동(x축)
- translateY(y): 이동(y축)

```css
transform: translate(40px, 40px);

transform: translateX(40px);
```

<br />

#### (2) **scale**

`크기` / 없음 (배수 사용)

- scale(x, y): 크기(x축, y축)
- scaleX(x): 크기(x축)
- scaleY(y): 크기(y축)

한쪽 축만 명시하면 찌그러질 수 있기 때문애<br />
보통은 크기 제어 시 x, y 축을 모두 명시함

```css
transform: scale(1.5);

transform: scale(0.7);

transform: scaleX(2);
```

<br />

#### (3) **rotate**

`회전` / deg 단위 사용

- rotate(degree): 회전(각도)

```css
transform: rotate(45deg);

transform: rotateX(45deg);
```

<br />

#### (4) **skew**

`기울임` / deg 단위 사용

- skew(x, y): 기울임(x축, y축)
- skewX(x): 기울임(x축)
- skewY(y): 기울임(y축)

```css
transform: skewX(45deg);

transform: skewX(-45deg);
```

<br />

#### (5) **matrix**

- matrix(n, n, n, n, n, n): 2차원 변환 효과

> matrix는 사용하기가 까다롭지만 직접적으로 사용할 필요가 없다.
>
> 앞에서 살펴본 모든 2D 변환함수들은 사실<br /> > **matrix 함수**를 쉽게 사용할 수 있도록 별칭으로 분류해 놓은 변환함수들이기 때문이다.
>
> matrix 를 제외한 모든 변환함수들은<br /> > **브라우저에서 실제로 적용**될 때에는 matrix 라는 함수로 변환되서 적용된다.

<br />

### 3. 3D 변환 함수

#### (1) **translate**

`이동` / px 단위 사용

- translateZ(z): 이동(z축)
- translate3d(x,y,z): 이동(x축, y축, z축)

<br />

#### (2) **scale**

`크기` / 없음 (배수 사용)

- scaleZ(z): 크기(z축)
- scale3d(x,y,z): 크기(x축, y축, z축)

<br />

#### (3) **rotate**

`회전` / deg 단위 사용

- rotateX(x): 회전(x축)
- rotateY(y): 회전(y축)
- rotateZ(z): 회전(z축)
- rotate3d(x,y,z): 회전(x축, y축, z축)

3D 변환 함수에서는 주로 rotateX, rotateY 가 자주 사용됨

<br />

#### (4) **skew**

`기울임` / deg 단위 사용

- skew(x, y): 기울임(x축, y축)
- skewX(x): 기울임(x축)
- skewY(y): 기울임(y축)

<br />

#### (5) **matrix**

- matrix3d(n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n): 3차원 변환 효과

> 앞에서 살펴본 모든 3D 변환함수들은 matrix3d 함수를 별칭으로 분류해 놓은 변환함수들이며,<br />
> 브라우저 내에서 matrix3d 함수를 통해 관리된다.

<br />

#### (6) **perspective**

`원근법` / px 단위 사용

- perspective(n): 원근법(거리)

```css
/* 원근법을 이용해서 3D 변환 사용하기  */
transform: perspective(500px) rotateX(45deg) rotateY(45deg);
```

원근법 함수는 반드시 **제일 앞**에 작성해야 함<br />
거리가 가까울수록 왜곡이 심하게 일어남<br />

<br />

### 4. perspective

**하위 요소**를 관찰하는 **원근 거리**를 지정

- 단위: px 등 단위로 지정

<br />

#### \* perspective 속성과 함수의 차이점

(1) 속성

- perspective: 600px;
- 적용대상: 관찰 대상의 부모
- 기준점 설정: perspective-origin

```css
.parent {
  ...
  perspective: 500px;
}

.child {
  ...
  transform: rotateY(45deg);
}
```

<br />

(2) 함수

- transform: perspective(600px)
- 적용대상: 관찰 대상
- 기준점 설정: transform-origin

```css
.parent {
  ...
}

.child {
  ...
  transform: perspective(500px) rotateY(45deg);
}
```

함수보다는 관찰 대상의 부모를 적용대상으로 하는 속성을 사용하는 것이 좋다.

<br />

### 5. backface-visibility

3D 변환으로 회전된 요소의 뒷면 숨김 여부

- 기본값: visible - 뒷면 보임
- hidden: 뒷면 숨김

```css
.parent {
  ...
}

.child {
  ...
  transform: rotateY(180deg);
}
/* 요소의 뒷면이 보여짐 */
```

```css
.parent {
  ...
}

.child {
  ...
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
/* 요소의 뒷면이 숨겨짐 */
```

```toc

```
