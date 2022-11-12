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


// 04. Reduce

// For
let total = 0;

for( let i=0; i<students.length; i++) {
    total += students[i].age;
}
console.log(total);

// Reduce
const result = students.reduce((total, student) => {
    return total + student.age;
}, 0)

console.log(result);

const resultFilter = students.reduce((allCourses, student) => {
    return Array.from(new Set([...allCourses, ...student.course]))
}, [])

console.log(resultFilter);