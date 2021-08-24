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
