
// variables : A container that stores data values

/* let fullName = "Ransford Antwi";

let age = 25;

let isStudent = false;

document.getElementById('para').textContent = `My name is ${fullName}`;

document.getElementById('p2').textContent = `I am ${age} years old`;

document.getElementById('p3').textContent = `SAre you a student? ${isStudent}`; */


//let students = 30;

//students += 2

//students **= 2

//console.log(students);

/* let results = 1 + 3 - 4 * 3 / 4 **3;

console.log(results) */

// Howe to accept user input 

/* let userName ;

userName = window.prompt("What is your username"); */


/* let userName;

document.getElementById('sub').onclick = function(){
    userName = document.getElementById('user').value;
    document.getElementById('myH1').textContent = `Hello ${userName}`;
    document.getElementById('myH1').style.color = "red";
    console.log(userName);
} */

    /* let age = window.prompt("How old are you?");
     
    age = Number(age);

    age += 2;

    console.log(age, typeof age); */

    // create a program that calculates the circumference of a circle
/* 
    const PI = 3.14;

    let radius;

    let circumference;

    radius = window.prompt("Enter the radius of the circle");

    radius = Number(radius);

    circumference = 2 * PI * radius;

    console.log(`The circumference of the circle is ${circumference}`); */

    // create a program that calculates the area of a circle

/*     let PI = 3.14;
    let radius;
    let area;

    radius = window.prompt("Enter the radius of the circle");
    radius = Number(radius);
    area = PI * radius ** 2;
    console.log(`The area of the circle is ${area}`); */

/* 
    document.getElementById('btn').onclick = function (){
        let PI = 3.14;
        let radius;
        let area;

        radius = document.getElementById('radius').value;
        radius = Number(radius);
        area = PI * radius ** 2;
        console.log(`The area of the circle is ${area}`);
        document.getElementById('result').textContent = `The area of the circle is ${area}`;
        document.getElementById('result').style.color = "blue";
    } */


        // create a program that calculates the potential energy of an object

/* 
        const gravity = 9.8;
        let mass;
        let height;
        let potentialEnergy;

        document.getElementById('btn').onclick = function (){
            mass = document.getElementById('mass').value;
            mass = Number(mass);
            height = document.getElementById('height').value;
            height = Number(height);

            potentialEnergy = mass * gravity * height;

            console.log(`The potential energy of the object is ${potentialEnergy}`);
            document.getElementById('output').textContent = `The potential energy of the object is ${potentialEnergy} Joules`;
            document.getElementById('output').style.color = "gray";
        } */

            const decreaseBtn = document.getElementById('decreaseBtn');
            const increaseBtn = document.getElementById('increaseBtn');
            const resetBtn = document.getElementById('resetBtn');
            const counterLabel = document.getElementById('counterLabel');
            let counter = 0;

            increaseBtn.onclick = function(){
                counter ++;
                counterLabel.textContent = counter;
            }

            decreaseBtn.onclick = function(){
                counter --;
                counterLabel.textContent = counter;
                counterLabel.style.color = "red";
            }

            resetBtn.onclick = function(){
                counter = 0;
                counterLabel.textContent = counter;
                counterLabel.style.color = "white";
            }