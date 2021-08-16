// Rounds grade to the nearest multiple of 5 if the difference between is less than 3
// Otherwise keep the grade where it stands
// Any grade less than 40 is failing grade
// Don't round any grades below 38
// Return array of updated grades

const gradingStudents = (grades) => grades.map((grade) => grade < 38 || Math.ceil(grade / 5) * 5 - grade >= 3 ? grade : Math.ceil(grade / 5) * 5);


console.log(gradingStudents([73, 67, 38, 33]))
console.log(gradingStudents([84, 27, 58, 40]))
