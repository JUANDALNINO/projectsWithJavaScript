// sample array of students
const students = [
    {
      name: "Jill",
      lastname: "Doe",
      age: 24,
      course: "Marketing",
    },
    {
      name: "John",
      lastname: "Doe",
      age: 22,
      course: "Web Development",
    },
    {
      name: "Jack",
      lastname: "Doe",
      age: 20,
      course: "Accounting",
    },
    {
      name: "Ryan Jhon",
      lastname: "Ray",
      age: 23,
      course: "Web Development",
    },
    {
      name: "Jane",
      lastname: "Doe",
      age: 20,
      course: "Financial Management",
    },
  ];


// 06. Find
// Find an element

const result = students.find(function (student) {
        // Find Name
    if(student.name === 'Jack') {
        return 1
    }
})
console.log(result);



const resultLastName = students.find((student) => {
    // Find LastName
    if(student.lastname === 'Doe') {
        return 1
    }
})
console.log(resultLastName);



const resultAge = students.find((student) => {
    //Find age
    if(student.age === 20) {
        return 1
    }
})
console.log(resultAge)