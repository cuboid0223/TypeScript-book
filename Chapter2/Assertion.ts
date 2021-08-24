// 有關鍵字 as
const isPositive_7 = ((input) => input > 0) as (input: number) => boolean;
// <Type>(...) 的格式
// Type ==> (input: number) => boolean
// ... ==> (input) => input > 0
const isPositive_8 = <(input: number) => boolean>((input) => input > 0);
