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


// 05. Sort
// Organize => sort
const sortedStudents = students.sort(function(first, second) {
    if(first.age > second.age) { // Condition Sort
        return 1
    } else {
        return -1
    }
})
console.log(sortedStudents);

const sortedStudents2 = students.sort((a,b) => a.age > b.age ? 1 : -1);
console.log(sortedStudents2);

const numbers = [10, 30, 1000, 10000, 100, 10]
console.log(numbers.sort((a,b) => a-b));
// [ 10, 10, 30, 100, 1000, 10000 ]