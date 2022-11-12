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
  

// 1. For Each: Travel the array
  students.forEach((student, index, students) => {
    console.log(student); // Single
    console.log(index); // Index
    console.log(students); // Array

    console.log(student.name); // Property
    console.log(student.age);
    console.log(student.name + ' ' + student.lastname); // 2 properties
  });



