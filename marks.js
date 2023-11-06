
// Write a JavaScript program to check a student's total marks in various examinations. 
// The student will get A+ grade if the total marks are 
// in the range 89..100 inclusive, if the examination is "Final-exam" 
// the student will receive A+ grade and total marks must be greater 
// than or equal to 90. If the student gets an A+ grade, return true, 
// otherwise return false.

function examStatus(totalMarks, isExam)
  {
  if (isExam) {
    return totalMarks >= 90;
  }
 return (totalMarks >= 89 && totalMarks <= 100);
 }

console.log(examStatus("78", " "));
console.log(examStatus("89", "true "));
console.log(examStatus("99", "true "));
