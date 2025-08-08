
let noOfStudent = document.querySelector(".num-of-student");
let noOfFaculty = document.querySelector(".num-of-faculty");
let noOfStaff = document.querySelector(".num-of-staff");

let count = 0;
let countdownStarted = false;

let count2 = 0;
let countdownStarted2 = false;

let count3 = 0;
let countdownStarted3 = false;

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
function StaffCounter () {
    if (!countdownStarted3) {
        countdownStarted3 = true;

        let countdown3 = setInterval(function() {
            noOfStaff.innerText = `${count3}+`;
            count3++;

            if (count3 > 7) {
                clearInterval(countdown3);
            }
        }, 500);
    }

}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting === true) {

            if(entry.target.id === 'number-counter') {
                studentCounter();
                facultyCounter();
                StaffCounter();
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

const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});

// Toggle submenu
document.querySelectorAll(".has-submenu").forEach(item => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    item.classList.toggle("open");
  });
});

