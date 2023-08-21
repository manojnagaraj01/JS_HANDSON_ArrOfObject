const studentRecords = [ 
    {
        name: 'John', 
        id: 123, 
        marks : 98 
    },
    {
        name: 'Baba', 
        id: 101, 
        marks : 23 
    },
    {
        name: 'yaga', 
        id: 200, 
        marks : 45 
    },
    {
        name: 'Wick', 
        id: 115, 
        marks : 75 
    } 
]


let question_1 = document.getElementById("question_b1")
let question_2 = document.getElementById("question_b2")
let question_3 = document.getElementById("question_b3")
let question_4 = document.getElementById("question_b4")
let question_5 = document.getElementById("question_b5")
let question_6 = document.getElementById("question_b6")
let question_7 = document.getElementById("question_b7")
let question_8 = document.getElementById("question_b8")

question_1.addEventListener("click", function(event){
    let studentNamesInCaps = studentRecords.map(student => student.name.toUpperCase())
    let answer1 = document.getElementById("answer1")
    answer1.innerText = studentNamesInCaps;
    let a1 = document.getElementById("img1")
    a1.setAttribute("src", "./a1.png")
})
question_2.addEventListener("click", function(event){
    let highScorers = studentRecords.filter(student => student.marks > 50);
    let answer2 = document.getElementById('answer2');
    highScorers.forEach(student => {
        let listItem = document.createElement('li');
        listItem.textContent = `Name: ${student.name}, ID: ${student.id}, Marks: ${student.marks}`;
        answer2.appendChild(listItem);
    });
    let a2 = document.getElementById("img2")
    a2.setAttribute("src", "./a2.png")
})
question_3.addEventListener("click", function(event){
    let toppers = studentRecords.filter(student => student.marks > 50 && student.id > 120);
    let answer3 = document.getElementById('answer3');
    toppers.forEach(student => {
        let listItems = document.createElement('li');
        listItems.textContent = `Name: ${student.name}, ID: ${student.id}, Marks: ${student.marks}`;
        answer3.appendChild(listItems);
    });
    let a3 = document.getElementById("img3")
    a3.setAttribute("src", "./a3.png")
})
question_4.addEventListener("click", function(event){
    let totalMarks = studentRecords.reduce((total, student) => total + student.marks, 0);
    let answer4 = document.getElementById('answer4');
    answer4.innerHTML = `Total Marks: ${totalMarks}`;
    let a4 = document.getElementById("img4")
    a4.setAttribute("src", "./a4.png")
})

question_5.addEventListener("click", function(event){
    let highScorers = studentRecords.filter(student => student.marks > 50);
    let answer5 = document.getElementById('answer5');
    let names = highScorers.map(student => student.name);
    let namesList = document.createElement('ul');
    names.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        namesList.appendChild(listItem);
    });
    answer5.appendChild(namesList);
    let a5 = document.getElementById("img5")
    a5.setAttribute("src", "./a5.png")
})
question_6.addEventListener("click", function(){
    let Marks = studentRecords.filter(student => student.id> 120);
    let answer6 = document.getElementById('answer6');
    let sum = Marks.reduce((total, student) => total + student.marks, 0);
    answer6.innerHTML = `Total Marks of the students with id > 120 : ${sum}`;
    let a6 = document.getElementById("img6")
    a6.setAttribute("src", "./a6.png")
})

question_7.addEventListener("click", function(){
    for (let i = 0; i < studentRecords.length; i++) {
        if (studentRecords[i].marks < 50) {
          studentRecords[i].marks += 15;
        }
    }
    let newMarks = 0;
    for (let i = 0; i < studentRecords.length; i++) {
        if (studentRecords[i].marks > 50) {
          newMarks += studentRecords[i].marks;
        }
    }
    let answer7 = document.getElementById("answer7");
    answer7.textContent  = "Total marks of students with marks greater than 50: " + newMarks;
    let a7 = document.getElementById("img7")
    a7.setAttribute("src", "./a7.png")
})

question_8.addEventListener("click", function(){
    const additionalStudents = [
        { name: "Akash", class: "A", rollNo: 10 },
        { name: "Sagar", class: "B", rollNo: 45 },
        { name: "Pavan", class: "C", rollNo: 35 },
        { name: "Madhukar", class: "D", rollNo: 25},
        { name: "yadhunandhan", class: "E", rollNo: 50 },
        { name: "Rakesh", class: "F", rollNo: 42 },
    ];
    
    const allStudents = [...studentRecords, ...additionalStudents];
    
    const answer8 = document.getElementById("answer8");
    
    allStudents.forEach((student) => {
        const overAllstudents = document.createElement("div");
        overAllstudents.innerHTML = `<span>Name: ${student.name}</span>
        ${student.id ? `<span>, ID: ${student.id}</span>` : ""}
        ${student.marks ? `<span>, Marks: ${student.marks}</span>` : ""}  
        ${student.class ? `<span>, Class: ${student.class}</span>` : ""}
        ${student.rollNo ? `<span>, Roll No: ${student.rollNo}</span>` : ""}`;
        answer8.appendChild(overAllstudents);
    });
    let a8 = document.getElementById("img8")
    a8.setAttribute("src", "./a8.png")
})




