
// Assigment # 2

//storing a person name in a variable
let personName:string = "Rao Yasir"

// Printing a person name in a lowercase

console.log("lowercase:", personName.toLowerCase());

// Printing a person name in a uppercase

console.log("uppercase:", personName.toUpperCase());

// Printing a person name in a titalcase

console.log("titalcase:", personName.replace(/\b\w/g,c => c.toUpperCase()));