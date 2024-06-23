let words = document.querySelectorAll(".word");
words.forEach((word) =>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i*80);

    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "leter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)

//circle skill ////////////////////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;

    for(let i=0; i<dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent; i++){
        pointsMarked[i].classList.add('marked')
    }


})


//mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');

//active menu ////////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){

    }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");

}
activeMenu();
window.addEventListener("scroll",activeMenu);

//sticky navbar ////////////////
const header = document.querySelector("header");
window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrollY > 50);
})

//toggle icon navbar ////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open");

}
window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.toggle("open");
}

//parallex ////////////////
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

// Combine all elements into a single NodeList
const elementsToObserve = document.querySelectorAll(".scroll-scale, .scroll-bottom, .scroll-top");

// Observe each element
elementsToObserve.forEach((el) => observer.observe(el));


function toggleEducation() {
    var educationDiv = document.getElementById("myDiv1");
    var expandIcons = document.querySelectorAll(".uil-angle-down");
  
    if (educationDiv.style.display === "none") {
      educationDiv.style.display = "block";
      expandIcons.forEach(icon => icon.classList.add("expanded"));
    } else {
      educationDiv.style.display = "none";
      expandIcons.forEach(icon => icon.classList.remove("expanded"));
    }
  }
  
  function toggleVolanteering() {
    var volunteeringDiv = document.getElementById("myDiv2");
    var expandIcons = document.querySelectorAll(".expand");
  
    if (volunteeringDiv.style.display === "none") {
      volunteeringDiv.style.display = "block";
      expandIcons.forEach(icon => icon.classList.add("expanded"));
    } else {
      volunteeringDiv.style.display = "none";
      expandIcons.forEach(icon => icon.classList.remove("expanded"));
    }
  }



  function sendEmail() {
    Email.send({
       SecureToken :"11ac623f-087b-440b-9bf3-80a932cae2f6" ,
       To: 'sahanrashmika542@gmail.com',
       From: '',
       Subject: "My -Porfolio Massage",
       Body: "Name:" + document.getElementById("name").value 
       + "<br/>Email:" + document.getElementById("email").value 
       + "<br/>Phone no:" + document.getElementById("phone").value 
       + "<br/>Message:" + document.getElementById("message").value,
    }).then(
       message => alert(message)
    );
 }