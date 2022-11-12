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

// 2. Map: Travel elements and return a new array
  // Return a new array with new changes
const fullNames = students.map((student) => {
    return student.name + ' ' + student.lastname;
})


const names = students.map(student => student.name);

const studentsNew = students.map(student => {
    return {
        fullname: student.name + ' ' + student.lastname,
        age: student.age,
        course: student.course
    }
})

const studentsNew2 = students.map(student => {
    return {
        ...student, // Add all the object items => First
        title: `${student.name} - ${student.course}`
    }
})