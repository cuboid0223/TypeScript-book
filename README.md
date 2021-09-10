---
title: TypeScript-先苦後甘
tags: TypeScript, 教學
description: View the slide with "Slide Mode".
---
TypeScript-先苦後甘
===

<!-- # TypeScript-麥擱 console.log -->

<!-- Put the link to this slide here so people can follow -->
gitHub repo:  https://github.com/cuboid0223/TypeScript-book


我誰?
---
- Cuboid 
- 強迫自己寫筆記中～～
- 參考： 讓 “TypeScript 成為你全端開發的 Ace” 此書
- 使用指南
-- JavaScript 會基本語法以上
-- terminal 會基本操作
-- 有安裝 node.js

第一章 - TypeScript 發展與概論
---
### 什麼是 TypeScript ?
**TypeScript 即是 JavaScript 的超集合！**

超集合？ 三毀 ！？

白話點 :point_down: 
- JavaScript == 噴火龍

![image alt](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/100px-Unofficial_JavaScript_logo_2.svg.png)

![image alt](http://g.udn.com.tw/upfiles/B_RA/railwayTaiwan/PSN_PHOTO/331/f_18272331_1.png =100x100)
- TypeScript == 超級噴火龍X

![image alt](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/100px-Typescript_logo_2020.svg.png)

![image alt](https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/ca3db4aad5c85a525d9be86852b26db1db7a22c0.png =100x100)
- Type System == 噴火龍進化石Ｘ

![image alt](https://s1.52poke.wiki/wiki/7/74/Dream_%E5%96%B7%E7%81%AB%E9%BE%99%E8%BF%9B%E5%8C%96%E7%9F%B3%EF%BC%B8_Sprite.png)

所以噴火龍會的， 超級噴火龍 都會！
意思就是 JavaScript 的程式碼，在 TypeScript 的編譯器都可以編譯成功，如果有符合 TypeScript 的規範的話

---

### 為啥要用 TypeScript ?
#### 優點
- 在程式未執行前發現潛在錯誤，你就不用瘋狂 console.log debug
- typo
- 檢測邊緣情境
- 對於各種不同版本 JavaScript 的編譯
- 擁有較完整的物件導向語法

#### 缺點
- 一支獨秀，團隊根本沒人鳥你
---

### 什麼是動態型別語言、靜態型別語言、強型別語言、弱型別語言

- 動態型別語言: 
> 變數型別依照存得值本身來判斷，例如 JavaScript, Python
```javascript
const a = 1;
const b = 1;
console.log(a==b); // true

const c = {name: '小明'};
const d = {name: '小明'};
console.log(c==d); // false
```
- 靜態型別語言: 
> 根據程式裡宣告的型別，例如 Java, C++
> 回想大一下的 Java ，在用變數時都要宣告 Int, Float ...
```java
public class Example {
        public static void main(String[] args) {
              int number=20;
              System.out.println(number);

}
```
- 強型別語言與弱型別語言 怎麼分
**有無自動轉型（Coerce）**
強型別語言: Python, Ruby
弱型別語言: JavaScript, C(偏弱)

---

### 所以 TypeScript 是哪種靜態、動態、強型別、弱型別？
- 靜態、動態?
>既然有類似宣告的動作，那 TypeScript 是靜態型別語言？
但換個角度想，上述提到
```
所以噴火龍會的， 超級噴火龍 都會！
意思就是 JavaScript 的程式碼，
在 TypeScript 的編譯器都可以編譯成功，如果有符合 TypeScript 的規範的話
```
>可以跑 JS 不就變動態型別語言？ 應付這種有時動態有時靜態的 TypeScript 我們給予新的名詞**漸進式型別系統（Gradual Typing)**

- 強型別、弱型別？
> 因為可以跑 JS 代表可以自動轉型（Coerce）所以是弱型別語言，這點倒是很明確

==總結： TypeScript 是有漸進式型別系統的弱型別語言==

---

### 漸進式型別系統（Gradual Typing），兼具動態型別語言、靜態型別語言的特色

- 型別註記(Type Annotation)
> 白話點，有宣告型別（動態型別語言特色）
- 型別推論(Type Inference)
> 白話點，沒有宣告型別，我依照你賦予的值或經運算結果來推論你的型別
（靜態型別語言特色）

---

### 第一個 TypeScript Hello World!

> 檔案名稱： hello.ts
```typescript
const greet = (message: string) => {
    console.log(message)
}

greet("hello world")
// greet(123)
```

開始編譯前
先下載 VScode 插件 codeRunner
```
$> npm install -g ts-node

$> npm install @types/node --save-dev
```

:::info
1. ==型別提示（Type hint）:將滑鼠移動到變數或函式等會跳出型別方面的內容提示==
2.  之後看到 " $> " 開頭的程式碼，就是在終端機輸入～


:::


第二章 - 型別系統(Type System) ~~噴火龍進化石概論~~
---

### 型別註記 與 型別推論
- 型別註記(Type Annotation)
> 有被文字標示註記的變數或函示等，就會以靜態的方式（程式未執行前）偵測有無型別衝突方面的錯誤
- 型別推論(Type Inference)
> 沒有標示或者主動註記的變數或函式等，就會以接收到的值或表達式的運算結果來判斷其型別

:::warning
判斷使用型別註記還是讓程式自己推論很重要，過度使用型別註記反而可讀性下降，若消極使用型別註記，全都用推論，那直接寫原生 JS 就好，所以使用時機要拿捏
:::

以下三個範例（見 repo Chapter2），分別是 100%積極、100%消極、拿捏剛好
```typescript
// 100% 積極註記
let sth:number = 12345
const addSomething = (x:number):number => {
    return (x + sth) as number;
} 

const result:number =  addSomething(37655) as number
```
> 嗯，怎麼到處都是 number....
```typescript
// 100% 消極註記
let sth_2 = 12345;
const addSomething_2 = (x) => {
  return x + sth_2;
};

const result_2 = addSomething_2(37655);
```
> ...可以把檔名改回 .js 檔了
```typescript
// 適時註記，適時推論
let sth_3 = 12345;
const addSomething_3 = (x:number) => {
  return x + sth_3;
};

const result_3:number = addSomething_3(37655);
```

> sth_3 很明顯是數字，所以不用註記
參數 x ，依照字意就是個 字母 無法推斷其型別，所以需要註記
result_3 ，依照字意無法推斷其型別，所以需要註記

#### 總結：
很難用人類常識來聯想的方式去知道該型別為何，就使用註記
但相反的，如果變數命名，可以推測型別，像是 ```isPositive``` ，可以聯想到很有可能是布林值，即可使用推論機制

---

### 型別註記與斷言的差異性
斷言？ 什麼斷言... 剛剛都沒提到
但勒！型別系統不是只分成 型別註記 和 型別推論 嗎？
怎麼多個斷言！？
事實上型別註記再細分可以分成 **註記** 和 **斷言**

:::info
之後篇章，講到型別註記，就是涵蓋這兩種概念，要會自己判斷是註記還是斷言
:::


####  型別註記語法(Annotation)


```typescript
// 型別註記語法
let randomNumber: number = Math.random();
const myName: string = "Cuboid";
const subscribed: boolean = true;

// 函式 (型別註記語法)
// 以下函式為給定一個值判斷是否為正數

// 普通函式
function isPositive(input: number): boolean {
  return input > 0;
}

// 箭頭函式
const isPositive_2 = (input: number): boolean => {
  return input > 0;
};

// 普通函式 做為值指派到變數
const isPositive_3: (input: number) => boolean = function (input) {
  return input > 0;
};

// 箭頭函式 做為值指派到變數
const isPositive_4: (input: number) => boolean = (input) => {
  return input > 0;
};

// 普通函式 邊宣告邊註記(嚴格來說是讓程式碼推論被指派韓式的型別)
const isPositive_5 = function (input: number): boolean {
  return input > 0;
};

// 箭頭函式 邊宣告邊註記(嚴格來說是讓程式碼推論被指派韓式的型別)
const isPositive_6 = (input: number): boolean => {
  return input > 0;
};

```

#### 型別斷言語法（Assertion）
如何分辨是註記還是斷言？
> 有使用關鍵字 as 或者是 ```<Type>(...)``` 的格式就是斷言

```typescript=
// 有關鍵字 as
const isPositive_7 = ((input) => input > 0) as (input: number) => boolean;

// <Type>(...) 的格式
// Type ==> (input: number) => boolean
// ... ==> (input) => input > 0
const isPositive_8 = <(input: number) => boolean>((input) => input > 0);
```

斷言可以使用在什麼地方？
> 當程式沒法推論某 **表達式(註1)** 的確切運算結果之型別時

看不懂上面的那句很正常：
> 既然不能推論那就用註記不就行了，用個毛線 斷言！？

先別急～～

舉幾個簡單常使用斷言的案例： 
1. 接第三方 API
2. 使用某套件的功能
3. 呼叫會回傳未知結果的函式

斷言的名詞意義
> 決斷地告訴程式，某表達式的運算結果
:::warning
斷言只能用在 **表達式** ，畢竟得回傳結果才能斷言嘛～
:::

---
:::info
註1： 敘述式(Statement) 與 表達式(Expression)
 1. 敘述式 代表程式**運行**的流程 例如： for 迴圈、 if else、 變數宣告 ...
 2. 表達式 代表程式**運算**的流程 並且會回傳結果（Return） 
  例如：
  ```javascript=
  // Arithmetic Expression
  1 + 2 * 3  //return 7
  
  // Function/ Method Invocation Expression
  Math.pow(2,10) // 1024
  
  // Logical Expression
  true && (sth === null || myAge < 18)
  
  // Ternary Operator
  myAge < 18 ? 'young' : 'old'
  
  // IIFE
  const status = (function(mtAge) {
      if(myAge < 18 ){
          return 'Young';
      }
      return 'Adult'
  })
  
  ```
 二分法： 敘述式不會回傳結果，表達式 會
:::

斷言範例程式碼
```typescript=

// 運算表據式 Arithmetic Expression
(foo + bar * baz) as number;
<number>(foo + bar * baz);

// 邏輯表達式 Logical Expression
(isPositive(num) && isEven(num)) as boolean;
<boolean>(isPositive(num) && isEven(num));

// 函式(或方法)的呼叫 Function/ Method Invocation Expression
Math.pow(2, 10) as number;
<number>(Math,pow(2,10));

// 三元運算子 Ternary Operator
(myAge < 18 ? 'Youngster' : 'Adult') as string;
<string>(myAge < 18 ? 'Youngster' : 'Adult');

// 立即呼函式表達式 IIFE
(function (x, y) ({
    return x + y;
})(1, 2) as number;

<number>(
(function (x, y) {
    return x + y;
})(1 + 2));

```

### 註記 V.S. 斷言

註記： 任何被註記到的變數、函式的參數等，都必須 ==遵照== 被註記過後的變數型別
斷言：被斷言過後的表達式之運算結果就是某某型別，及==覆蓋==該表達式運算的結果

> 註記 像是 事情發生之前叫你遵照規範（型別）
> 斷言 像是 事情發生之後有了結果 接著覆蓋推論結果


下方的 something 是什麼型別？
```typescript=
// Chapter2/AnnotationVSAssertion.ts

function returnsAny():any {
    return 123;
}

let something = returnsAny();
```

肉眼看都知道該函式會回傳數字型別

接著我們改用 斷言
```typescript=
let something = returnsAny() as number;
```

可以發現 something 從 any型別 被斷言成數字型別


---

### 2.3 綜觀 TypeScript 型別種類


#### 原始型別

原始型別 即是 資料組成的最小單位，各自互相獨立（誰都不屬於誰）
* 數字
* 字串
* 布林值
* undefined
* null
* void
* Symbol


#### 物件型別
* JSON
```json=
{
    name: 'Cuboid',
    age: 20,
    interest: ['drawing', 'programming']
}
```
* 陣列 array
```=
['Cuboid', 'May', 'Bill']
```
* 函式 function
:::info
任何非原始型別的資料，都屬於 JavaScript 物件範疇，所以 function 也算
:::  
* 實體 Instance
```typescript=
const foo = new Date('2021-08-24');
```
:::info
補充：由類別（Class）建構出來的物件，即是「實體」
實體的建構方式是用關鍵字 new 出來的
例如：變數 foo 存的是 Date 類別建構出來的物件
:::  


#### 明文型別

> 明文(literal)的定義：值（value）的表現方式
```typescript=
// 數字明文
123;

// 字串明文
'hello world';

// 布林值明文
true

// 物件明文
{
    name: 'Cuboid',
    age: 20,
    interest: ['drawing', 'programming']
}// JSON

['Cuboid', 'May', 'Bill'] // Array

()=> 123 // 函式物件
```
> 上述除了函式外，都可以自成一種型別，統稱為明文型別

範例程式：
```typescript=
// Chapter2 / 2.3 / literal-type.ts

const foo: 1|2|3 = 1;
const foo2: 1 | 2 | 3 = 4; // 報錯

const foo3:true = true;
const foo4:true = false; // 報錯
```
> 變數 foo 被限定只能指派 1、2、3 其中一種
> 
> 變數 foo3 被限定只能指派 true

#### TypeScript 提供型別 (TypeScript Provided Types)
> 原生 JavaScript 所沒有的型別特色
* 元組(Tuple)
:::info
跟陣列很像但比陣列更嚴格，在 **數量、型別、排序** 都有所限制
:::
範例程式：
```typescript=
// tuple
//  Chapter2 / 2.3 / tuple.ts
const foo_tuple:[number, string, boolean] = [666, "Cuboid", false];
```
> 變數 foo_tuple 被限制只能有三個元素，且順序和型別得依照 數字、字串、布林值

```typescript=+
// array
const bar_array:(number | boolean | string)[] =  [false, 'hello', 666, 123, true]
```
> 如果想要存放數字或字串或布林值，不考慮數量、順序，請用 Array
* 列舉(Enumerator) 
:::info
相似性質的資料，用文字描述並且匯聚成的一種型別
:::
範例程式：
```typescript=
// Chapter2 / 2.3 / enum.ts
enum Color {'Red', 'Blue', 'Yellow', 'White'}

const baz:Color = Color.Yellow

```

#### 特殊型別

* any 型別
* never 型別
* unknown 型別
:::info
上述點到為止，會在之後深入探討
:::


#### 進階型別
* 泛用型別
:::info
型別自身參數化後表現出來的特殊型別
:::
* 可控索引型別（Indexable Type）
:::info

:::
範例程式：
```typescript=
const dictionary:{[key: string]: string} = {
    name: 'Maxwell',
    description: 'hello world',
    reason: 'TypeScript '
}
```
> 創立一個 JSON 物件，鍵與值都必須為字串
* 索引型別（Index Type）

範例程式：
```typescript=
const dictionary = {
    name: 'Maxwell',
    description: 'hello world',
    reason: 'TypeScript '
}

let info:keyof dictionary;

```
:::danger
bug
:::
* 複合型別(Composite Type)
:::info
複合型別 = 聯集型別(or) + 交集型別(and)
:::
範例程式：
```typescript=
let numOrString: number | string
let numAndString: number & string
```
> numOrString 顧名思義就是可以指派 number 或 string
> 
> numAndString  顧名思義就是可以指派 number 和 string ？
> 聽起來有點怪怪的
> 這是一種典型的型別互斥，之後深入會討論～～
---


第三章 - 深入型別系統 I (基礎篇)
---

### 3.1.1 TypeScript 編譯設定檔

```
>$ tsc --init
```
> 會產生 tsconfig.json 的設定檔
> 
> 不同的編譯設定會造就不同的 TypeScript 編譯規則與條件

---

### 3.1.2 型別化名（Type Alias）
:::info
給一個型別或型別組合一個新名稱
:::

> 之前介紹的 JSON 物件型別
```typescript=
const info:{
    name: string,
    age: number,
    interest: string[] 
} = {
    name: 'Cuboid',
    age: 18,
    interest: ['drawing', 'programming'] 
}

```
> 透過型別化名，解決上方冗長的寫法
範例程式：
```typescript=
type UserInfo = {
    name: string,
    age: number,
    interest: string[]
};

const info: userInfo = {
    name: 'Cuboid',
    age: 18,
    interest: ['drawing', 'programming'] 
}

```

---

### 3.2.1 型別推論機制
> 理解推論機制並不難，就是用原生 JS 
1. 傳遞性
```typescript=
let num = 123;
let whatTheType = num;
```
> 此時的 foo 會被推論為 number 型別，即 TypeScript 會傳遞型別 

2. 匯集性
```typescript=
let whatIsThis = (Math.random() > 0.5) ? 123 : '123';
```
> 此時推論出來的型別會以邏輯（or），即 聯集型別 來表示
> 
3. 固定性
```typescript=
let num_321 = 123;
num_321 = 456;
num_321 = 'Hello World';
```
> 此時最後一行會報錯，經推論過後的變數就只會固定接收該型別下的任何值

---

### 3.2.2 型別註記機制


---

## 3.3 JSON 物件型別
### 3.3.3 物件的完整性不能被動搖
```typescript=
let info_323 = {
  name: "Cuboid",
  age: 20,
  interest: ["programming", "Gulu Gulu"],
};

// 新增屬性
// info_323.email = "myMail@gmail.com"; // 報錯

// 刪除屬性
// delete info_323.name;
// https://stackoverflow.com/questions/63702057/what-is-the-logic-behind-the-typescript-error-the-operand-of-a-delete-operato

// 覆寫
info_323.name = 'Cube'; 


// 完全覆寫
info_323 = {
    name: 'Cuboid',
    age: info_323.age,
    interest: info_323.interest
}

// ES7 rest-spread
info_323 = {...info_323, name:'May'}

```

> 一但變數被推論為 JSON 物件時，必須遵守以下規則
> 1. 不能任意新增、刪除 屬性
> 2. 覆寫俵特定屬性或方法時，覆寫之值的型別不能跟推論出來的型別衝突
> 3. 覆寫掉整個 JSON 物件值，其型別結構不能與原先的型別結構衝突
>
> 簡言之，不能夠對物件造成結構上的破壞，需保持物件的完整性

---

### 3.3.4 選用屬性 Optional Property
從上一節可以看出， TypeScript 對 JSON 物件十分嚴格，因此會有一個機制，較為鬆散的 JSON 物件

```typescript=
type personalInfo = {
    name: string,
    age?: number,
    interest: string[]
}


let info_334: personalInfo = {
    name: 'Cuboid',
    interest: ['gulu', 'gulu']
}
```

> 可以看到 age 多了一個 “ ? ”
> 查看 personalInfo 的結構可以發現屬性 age 對應 number | undefined 進行聯集的復合動作， **TypeScript 會認為 age 這個屬性是可以忽略的**


對比上方程式碼，下方這個意思是指
**age 這個屬性一定得被指派且型別可以是 number 或 undefined 型別**

```typescript=+
type personalInfo2 = {
  name: string;
  age: number | undefined;
  interest: string[];
};

let info_334_2: personalInfo2 = {
  name: "Cuboid",
  interest: ["gulu", "gulu"],
}; // 報錯
```
:::danger
類型 '{ name: string; interest: string[]; }' 缺少屬性 'age'，但類型 'personalInfo2' 必須有該屬性
:::

---

### 3.3.5 唯讀屬性 Read-Only Property
避免開發者擅自覆寫屬性
```typescript=
type PersonalInfo = {
    name: string,
    readonly age: number,
    interest: string[]
}

let info_335: PersonalInfo = {
    name: 'Cuboid',
    age: 18,
    interest: ['gulu', 'gulu']
}

info_335.age = 20; // 報錯
```
:::danger
因為 'age' 為唯讀屬性，所以無法指派至 'age'
:::

---

## 3.4 函式型別
### 3.4.1 函式型別 - 推論機制 
函式型別會依照 return 的值去推論

範例程式：
```typescript=
function numberOrString() {
    const probability = Math.random()

    if(probability > 0.5){
        return probability
    }else{
        return probability.toString()
    }
}

numberOrString();
```
:::info
function numberOrString(): string | number
:::

改成回傳 42 
```typescript=
function numberOrString() {
    const probability = Math.random()

    if(probability > 0.5){
        return 42
    }else{
        return '42'
    }
}

numberOrString();
```
:::info
function numberOrString(): 42 | "42"
:::


若沒有 回傳值，型別會是 void


```typescript=
function greeting(){
    console.log('hello')
}
```
:::info
function greeting(): void
:::

### 3.4.2 函式型別 - 註記機制 
**大多數函式宣告時，輸入型別（參數）必須註記，因為輸入會無條件推論為 any 型別，輸出(return 值)則可以在開發過程註記確保實作過程符合註記時預期的型別效果**

```typescript=
function returnNumber(number){
    return number;
}
```
:::danger
參數 'number' 隱含了 'any' 類型
:::

---

### 3.4.3 函式型別 - 選用參數

```typescript=
function increment(input1:number, input2?:number){
    return input1 + (input2 ? input2 : 1);
}

increment(223,321)
increment(112)
```
函式的輸入部分宣告時，可以宣告選用參數，代表該函式被呼叫時，選用**參數部分不一定需要代入值**
:::info
查看 input2 型別：

(parameter) input2: number | undefined
:::

---

### 3.4.4 函式型別 - 預設參數
選用參數時常搭配預設參數，例如上面的程式碼 input2 需處理 undefined 的情況，也就是呼叫 increment 省略第二個參數

```javascript=
function increment(input1:number, input2:number=1){
    return input1 + input2;
}

increment(223,321)
increment(112)
```

透過預設參數，使程式碼更加簡潔


---
## 3.5 陣列型別

### 3.5.2 陣列型別 - 註記機制 

```typescript=

const fibSeq: number[] = [1,1,2,3,5,8,11]

// 二維陣列註記
const points: number[][] = [[1,1,2],[3,5,8]]

// 宣告數字或字串型別的陣列
const arr: (number | string)[] = [123, 'hello', 'typeScript']

// 空串列 一定得要註記，沒註記，空串列會被推定為 any 型別
const emptyArr:number[] = []
```

:::warning
空串列 一定得要註記，沒註記，空串列會被推定為 any 型別
:::

---
## 3.6 明文型別


### 3.6.1 明文型別 - 推論機制 

