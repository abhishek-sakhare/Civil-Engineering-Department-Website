
let homePageContent = document.querySelector(".homepage-content");
let noOfStudent = document.querySelector(".num-of-student");
let noOfFaculty = document.querySelector(".num-of-faculty");
let mission = document.querySelector(".mis-info");
let core = document.querySelector(".core-info");
let count = 0;
let countdownStarted = false;

mission.addEventListener("mouseover", function () {
    if (!countdownStarted) {
        countdownStarted = true;

        let countdown = setInterval(function() {
            console.log(count);
            noOfStudent.innerText = `${count}+`;
            count++;

            if (count > 400) {
                clearInterval(countdown);
            }
        }, 10);
    }
},{ once : true});

let count2 = 0;
let countdownStarted2 = false;

mission.addEventListener("mouseover", function () {
    if (!countdownStarted2) {
        countdownStarted2 = true;

        let countdown2 = setInterval(function() {
            console.log(count2);
            noOfFaculty.innerText = `${count2}+`;
            count2++;

            if (count2 > 30) {
                clearInterval(countdown2);
            }
        }, 100);
    }
},{ once : true});


