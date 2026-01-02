

// ข้อ 1
const numbers = [5, 10, 15, 20, 25];

// a. map() ยกกำลังสอง
const squaredNumbers = numbers.map(n => n * n);
console.log("1a squaredNumbers:", squaredNumbers);

// b. filter() เลือกเลขคู่
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("1b evenNumbers:", evenNumbers);

// c. reduce() หาผลรวม
const sumNumbers = numbers.reduce((sum, n) => sum + n, 0);
console.log("1c sumNumbers:", sumNumbers);


// ข้อ 2
const students = [
  { id: 1, name: 'Alice', grade: 85 },
  { id: 2, name: 'Bob', grade: 75 },
  { id: 3, name: 'Charlie', grade: 95 },
  { id: 4, name: 'David', grade: 60 }
];

// a. map() เอาเฉพาะชื่อ
const studentNames = students.map(student => student.name);
console.log("2a studentNames:", studentNames);

// b. filter() นักเรียนที่ผ่าน (>= 70)
const passedStudents = students.filter(student => student.grade >= 70);
console.log("2b passedStudents:", passedStudents);

// c. reduce() หาเกรดเฉลี่ย
const averageGrade =
  students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("2c averageGrade:", averageGrade);



// ข้อ 3 (คำสั่งเดียว)
const products = [
  { id: 1, name: 'Laptop', price: 800 },
  { id: 2, name: 'Mouse', price: 20 },
  { id: 3, name: 'Keyboard', price: 50 },
  { id: 4, name: 'Monitor', price: 150 }
];

// filter -> map -> reduce (ในคำสั่งเดียว)
const totalPrice =
  products
    .filter(product => product.price >= 100)
    .map(product => product.price * 2)
    .reduce((sum, price) => sum + price, 0);

console.log("3 totalPrice:", totalPrice);
