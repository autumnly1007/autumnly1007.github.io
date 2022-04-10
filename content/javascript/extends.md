---
emoji:
title: '[JS] 상속 (확장)'
date: '2022-04-10 22:00:00'
author: 안가을
tags: web js
categories: JS
---

## 💙 상속 (확장)

```js
class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle);
// Vehicle { name: "운송수단", wheel: 2 }
```

```js
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel); // super 는 상속받은 클래스 Vehicle 을 의미함
  }
}

const myBicycle = new Bicycle('삼천리', 2);
console.log(myBicycle);
// Bicycle { name: "삼천리", wheel: 2 } __proto__: Vehicle
```

```js
class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}

const myCar = new Car('벤츠', 4, true);
console.log(myCar);
// Car { name: "벤츠", wheel: 4, license: true } __proto__ : Vehicle
```

자바스크립트의 클래스 부분에서 extends 키워드를 통해<br />
특정한 클래스를 가지고 와서 확장(상속) 할 수 있고<br />
확장된 클래스는 super 라는 함수를 통해서 내부의 원하는 위치에서 실행할 수 있다.

```toc

```
