// javascript page 

// try adding the button on click properties, view your other work


// ############# also try to add functionality to the icons so that the visitors of the site know when the icons have been clicked

const menu = document.querySelector('.menu');
const closure = document.querySelector('.closure');
const xHolder = document.querySelector('.xHolder');
const nutsy = document.querySelector('.nutsy');
const offersBtn = document.querySelectorAll('.offersPGraph button');
const shopBtn = document.querySelectorAll('#cate div button');
const pattern = document.querySelectorAll('.pattern');
const navIcons = document.querySelectorAll('.navIcons i');
const sideIcon = document.querySelectorAll('.sideIcon');
const patIcons = document.querySelectorAll('.sideIcon i');
const topIcons = document.querySelectorAll('.navIcons i');
const productDivs = document.querySelector('#productDivs');
const nextToSide = document.querySelector('#nextToSide');
const hyperlinks = document.querySelectorAll('ul a');
const promos = document.querySelectorAll('.promos');

menu.addEventListener('click', () => {
    
    menu.style.display = "none"
    xHolder.style.display = "inline"
    nutsy.style.display = "block"
    
});

xHolder.addEventListener('click', () => {
    menu.style.display = "inline"
    xHolder.style.display = "none"
    nutsy.style.display = "none"
});

for (let i = 0; i < hyperlinks.length; i++) {
    hyperlinks[i].addEventListener("click", () => {
        xHolder.style.display = "none";
        menu.style.display = "inline";
        nutsy.style.display = "none";
    })
    
}

for (let i = 0; i < promos.length; i++) {
    promos[i].addEventListener("click", () => {
        window.location = 'spinner.html'
    })
}

for (let i = 0; i < offersBtn.length; i++) {
    offersBtn[i].addEventListener("click", () => {
        window.location = 'errors.html'
    })
    
}

for (let i = 0; i < pattern.length; i++) {
    pattern[i].addEventListener("mouseover", () => {
        sideIcon[i].style.marginLeft = "0px"
    })
}

for (let i = 0; i < pattern.length; i++) {
    pattern[i].addEventListener("mouseout", () => {
        sideIcon[i].style.marginLeft = "100px"
    })
}

for (let i = 0; i < topIcons.length; i++) {
    topIcons[i].addEventListener("click", () => {
        topIcons[i].style.color = "red";
    })
}

for (let i = 0; i < topIcons.length; i++) {
    topIcons[i].addEventListener("dblclick", () => {
        topIcons[i].style.color = "green"
    })
}

for (let i = 0; i < patIcons.length; i++) {
    patIcons[i].addEventListener("click", () => {
        patIcons[i].style.color = "blue";
    })
}

for (let i = 0; i < patIcons.length; i++) {
    patIcons[i].addEventListener("dblclick", () => {
        patIcons[i].style.color = "black"
    })
}

for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].addEventListener("click", () => {
        navIcons[i].style.color = "blue"
    })
}

for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].addEventListener("dblclick", () => {
        navIcons[i].style.color = "green"
    })
}

for (let i = 0; i < shopBtn.length; i++) {
    shopBtn[i].addEventListener("click", () => {
        window.location = 'spinner.html'
    })
}
     




// PATTERNS CODE ENDED ###############
// COUNTDOWN CODE BELOW###################

var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h "
    document.getElementById("minutes").innerHTML = minutes + "m "
    document.getElementById("seconds").innerHTML = seconds + "s"
}, 1000)



// var myfunc = setInterval(function () {
//     var now = new Date().getTime();
//     var timeleft = countDownDate - now;

//     var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

//     document.getElementById("days").innerHTML = days + "d "
//     document.getElementById("hours").innerHTML = hours + "h "
//     document.getElementById("minutes").innerHTML = minutes + "m "
//     document.getElementById("seconds").innerHTML = seconds + "s"
// }, 1000)

// pattern.addEventListener('mouseover', () => {
//     nextToSide.style.marginRight = "100px"

// })








// pattern.addEventListener('mouseover', () => {
//     sideIcon.style.marginLeft = "-100px"
// })