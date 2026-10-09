/* ================= NAME ANIMATION ================= */

const name = "Priyadharshini";

const nameElement = document.getElementById("myName");

let letterIndex = 0;


function typeName() {

    if (letterIndex < name.length) {

        nameElement.textContent += name[letterIndex];

        letterIndex++;

        setTimeout(typeName, 150);

    }

}


/* Start name animation */

typeName();



/* ================= ROLE ANIMATION ================= */

const roles = [
    "Full Stack Developer",
    "JavaScript Developer"
];

let currentRole = 0;

const roleText = document.getElementById("roleText");


function changeRole() {

    roleText.style.opacity = "0";


    setTimeout(function () {

        currentRole++;

        if (currentRole >= roles.length) {

            currentRole = 0;

        }

        roleText.textContent = roles[currentRole];

        roleText.style.opacity = "1";

    }, 300);

}


setInterval(changeRole, 3000);