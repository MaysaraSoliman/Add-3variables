

function info(firstName, lastName, age) {
    let heroContainer = document.querySelector(".hero-container");
    let firstParagraph = document.querySelectorAll("p")[0];
    let secondParagraph = document.querySelectorAll("p")[1];
    let thirdParagraph = document.querySelectorAll("p")[2];

    firstParagraph.innerHTML = `First Name : ${firstName}`;
    secondParagraph.innerHTML = `Last Name : ${lastName}`;
    thirdParagraph.innerHTML = `Age : ${age}`;
    heroContainer.classList.add("active")

    firstParagraph.style.cssText = "color: red;  font-size: 22px; "
    secondParagraph.style.cssText = "color: blue;  font-size: 22px; "
    thirdParagraph.style.cssText = "color: green;  font-size: 22px; "

    console.error("Done")
}

info("maysara", "soliman", "27")