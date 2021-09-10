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


// info_335.age = 20; // 報錯