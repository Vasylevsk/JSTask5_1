const students = [
  {
    id: 10,
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    id: 11,
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    id: 12,
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    id: 13,
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];

maxLenghtMarks();
function maxLenghtMarks() {
  const marks = students.map((student) => student.marks);
  const longestMarks = marks.reduce(function (max, n) {
    if (max.length > n.length) return max;
    else return n;
  });
  alert(`Max Lenght Marks: ${longestMarks}`);
}
