console.log("Hello World")
var id = 3
var name = "Thana"
var ok = true
var student = { id:1 }
var student2 = JSON.parse(JSON.stringify(student))
student2.id =2
console.log(student.id)