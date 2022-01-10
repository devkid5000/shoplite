// code like a god 
// this is the correct code 
const username = document.forms['form']['username'];
const password = document.forms['form']['password'];
const userBox = document.getElementById("username");
const passwordBox = document.getElementById("password");
const loginBtn = document.getElementsByTagName("button");
const uerror = document.getElementById("uerror");
const perror = document.getElementById("perror");
const box = document.getElementById("box");
const invalidDet = document.getElementById("invalidDet");
const refreshBtn = document.getElementById("refreshBtn");
const spinnerHeader = document.getElementById("spinnerHeader");
const wrapper = document.getElementById("wrapper");


username.addEventListener('textInput', user_verify);
password.addEventListener('textInput', pass_verify);





function validated() {
    if(username.value == "" && password.value == "") {
        uerror.style.display = "block";
        perror.style.display = "block";
        userBox.style.borderColor = "red"
        passwordBox.style.borderColor = "red"
        box.style.borderColor = "red";
        userBox.addEventListener('click', () => {
            user_verify();
        })
        passwordBox.addEventListener('click', () => {
            pass_verify();
        })
        return false;
    }if (username.value !== "" && password.value == "") {
        uerror.style.display = "none";
        perror.style.display = "block";
        return false;
    }if (username.value == "" && password.value !== "") {
        uerror.style.display = "block";
        perror.style.display = "none";
        return false;
    }if (username.value == "chizaram" && password.value == "xoft") {
        // brutalize this area 

        box.style.display = "none";
        spinnerHeader.style.display = "block";
        wrapper.style.display = "block";
        setTimeout(function() {
            window.location = 'life.html'
        }, 2500);
        
        // window.location = "grocospinner.html";
        return false;
    }if(username.value !== "chizaram" && password.value !== "xoft") {
        
        box.style.borderColor = "red"
        userBox.style.borderColor = "red"
        passwordBox.style.borderColor = "red"
        invalidDet.style.display = "block";
        refreshBtn.style.backgroundColor = "lime"
        alert( " "+username.value+" does not exist");
        userBox.addEventListener('click', () => {
            user_verify();
        })
        passwordBox.addEventListener('click', () => {
            invalidDet.style.display = "none";
            box.style.borderColor = "lime";
            pass_verify();
           
        })
        refreshBtn.addEventListener('click', () => {
            window.location = "index.html";
        })
        
        // try making it redirect safely to default design 
        // alert("invalid username or password")
        return false;
    }if(username.value == "chizaram" && password.value !== "xoft") {
        passwordBox.style.borderColor = "red";
        alert("invalid password, try again!");
        passwordBox.addEventListener('click', () => {
            pass_verify();
        })
        
        return false;
    }if(username.value !== "chizaram" && password.value == "xoft") {
        alert( " "+username.value+" does not exist");
        return false;
    }
}


function user_verify() {
    if(username.value.length >= 0) {
        uerror.style.display = "none";
        perror.style.display = "none";
        box.style.borderColor = "lime";
        userBox.style.borderColor = "lime"
        invalidDet.style.display = "none";
        return true;
    }
}

function pass_verify() {
    if(password.value.length >= 0) {
        uerror.style.display = "none";
        perror.style.display = "none";
        passwordBox.style.borderColor = "lime"
        // box.style.borderColor = "lime";
        return true;
    }
}
