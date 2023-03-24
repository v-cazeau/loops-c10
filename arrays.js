// Given the following array, output each fruit

const fruits = ['apple', 'banana', 'orange', 'kiwi', 'grapes']

for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}


// Given the following array, output each student's first name
//note: objects, the order of the KVP does not matter example first name will be together with Ilan, last name always Vaks; order in array does matter 


const students = [
  {
    firstName: 'Ilan',
    lastName: 'Vaks',
    gender: 'male',
  },
  {
    firstName: 'Kaniel',
    lastName: 'Tapper',
    gender: 'male',
  },
  {
    firstName: 'Meghann',
    lastName: 'Stamper',
    gender: 'female',
  },
]

for(let i = 0; i < students.length; i++) {
  console.log(students[i].firstName)
}
