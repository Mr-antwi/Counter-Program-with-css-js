// RANDOM NUMBER GENERATOR

/* const btn = document.getElementById("btn");

const label1 = document.getElementById("label1");

const label2 = document.getElementById("label2");

const label3 = document.getElementById("label3");

let min = 1;

let max = 6;

let random1 ;
let random2 ;
let random3 ;

btn.onclick = function () {
    random1 = Math.floor(Math.random() * max) + min;
    random2 = Math.floor(Math.random() * max) + min;    
    random3 = Math.floor(Math.random() * max) + min;

    label1.textContent = random1;

    label2.textContent = random2;
    label3.textContent = random3;
} */


    // if statement

    /* let age = 15;

    let hasVotersId = false;

    if(age >= 18){
        console.log("You can vote");
        if(hasVotersId == true){
            console.log("You can vote in the elections");
        }
        else{
            console.log("You cannot vote in the elections, you need a voters ID");
        }
    }

    else{
        console.log("You cannot vote");
    } */

        //A PROGRAM T0 CALCULATE THE PERIMETER OF A RECTANGLE

        /* let length;

        let width;

        let perimeter;

        document.getElementById('calculate').onclick = function () {
            length = document.getElementById('length').value;
            length = Number(length);

            width = document.getElementById('width').value;
            width = Number(width);

            perimeter = 2 * length + 2 * width;
            console.log(perimeter);

            document.getElementById('output').textContent = `The perimeter of the rectangle is ${perimeter}`;

            document.getElementById('output').style.color = "green";
        }

 */

        /* let mass;
        let velocity;
        let kineticEnergy;

        document.getElementById('calculate').onclick = function () {
            mass = document.getElementById('mass').value;
            mass = Number(mass);

            velocity = document.getElementById('velocity').value;
            velocity = Number(velocity);

            kineticEnergy = 1/2 * mass * velocity**2

            console.log(kineticEnergy);
            document.getElementById('output').textContent = `The kinetic energy is ${kineticEnergy} Joules`;
            document.getElementById('output').style.color = "gray";
        } */

            // Counter Program

            const counterLabel = document.getElementById("counterLabel");
            const incrementBtn = document.getElementById("incrementBtn");
            const decrementBtn = document.getElementById("decrementBtn");
            const resetBtn = document.getElementById("resetBtn");
            let counter = 0;

            incrementBtn.onclick = function () {
                counter ++;
                counterLabel.textContent = counter;
                counterLabel.style.color = "green";
            }

            decrementBtn.onclick = function () {
                counter --;
                counterLabel.textContent = counter;
                counterLabel.style.color = "red";
            }

            resetBtn.onclick = function () {
                counter = 0;
                counterLabel.textContent = counter;
                counterLabel.style.color = "gray";
            }
