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
      name: "Jyan Jhon",
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


const result = students.map(student => ({
    student: `${student.name} ${student.lastname}`,
    age: student.age
}))
    .filter(student => student.age > 20)
    .sort((a,b) => b.age - a.age)

console.log(result);
/* [
  { student: 'Jill Doe', age: 24 },
  { student: 'Jyan Jhon Ray', age: 23 },
  { student: 'John Doe', age: 22 }
] */

