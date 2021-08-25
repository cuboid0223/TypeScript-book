
// tuple
const foo_tuple:[number, string, boolean] = [666, "Cuboid", false];
// 變數 foo_tuple 被限制只能有三個元素，且順序和型別得依照 數字、字串、布林值

// 如果想要存放數字或字串或布林值，不考慮數量、順序，請用 Array
// array
const bar_array:(number | boolean | string)[] =  [false, 'hello', 666, 123, true]
