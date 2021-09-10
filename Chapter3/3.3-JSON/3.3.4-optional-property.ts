type personalInfo = {
    name: string,
    age?: number,
    interest: string[]
}
let info_334: personalInfo = {
  name: "Cuboid",
  interest: ["gulu", "gulu"],
};


type personalInfo2 = {
  name: string;
  age: number | undefined;
  interest: string[];
};


// let info_334_2: personalInfo2 = {
//   name: "Cuboid",
//   interest: ["gulu", "gulu"],
// };