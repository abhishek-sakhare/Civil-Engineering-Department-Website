
let homePageContent = document.querySelector(".homepage-content");
let noOfStudent = document.querySelector(".num-of-student");
let noOfFaculty = document.querySelector(".num-of-faculty");
let mission = document.querySelector(".mis-info");
let core = document.querySelector(".core-info");
let count = 0;
let countdownStarted = false;

let count2 = 0;
let countdownStarted2 = false;

function studentCounter () {
    if (!countdownStarted) {
        countdownStarted = true;

        let countdown = setInterval(function() {
            noOfStudent.innerText = `${count}+`;
            count++;

            if (count > 400) {
                clearInterval(countdown);
            }
        }, 10);
    }
}
function facultyCounter () {
    if (!countdownStarted2) {
        countdownStarted2 = true;

        let countdown2 = setInterval(function() {
            noOfFaculty.innerText = `${count2}+`;
            count2++;

            if (count2 > 30) {
                clearInterval(countdown2);
            }
        }, 100);
    }

}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting === true) {

            if(entry.target.id === 'number-counter') {
                studentCounter();
                facultyCounter();
            }
        } else {

        }
    })
}

var observer = new IntersectionObserver(callback, {
    threshold: [0.2]
});

observer.observe(document.getElementById("number-counter"));

//navbar script for mobile
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


// let activity = document.querySelector(".navbar-activity");
// let submenu = document.querySelector(".activity-submenu");

// activity.addEventListener("mouseover", () => {
//     console.log("activty");
//     submenu.style.display = "block";
// });
// activity.addEventListener("mouseout", () => {
//     console.log("activty");
//     submenu.style.display = "none";
// });


// mission.addEventListener("mouseover", function () {
//     if (!countdownStarted) {
//         countdownStarted = true;

//         let countdown = setInterval(function() {
//             noOfStudent.innerText = `${count}+`;
//             count++;

//             if (count > 400) {
//                 clearInterval(countdown);
//             }
//         }, 10);
//     }
// },{ once : true});


// mission.addEventListener("mouseover", function () {
//     if (!countdownStarted2) {
//         countdownStarted2 = true;

//         let countdown2 = setInterval(function() {
//             console.log(count2);
//             noOfFaculty.innerText = `${count2}+`;
//             count2++;

//             if (count2 > 30) {
//                 clearInterval(countdown2);
//             }
//         }, 100);
//     }
// },{ once : true});

