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