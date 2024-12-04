var signupName = document.getElementById('signup-name');
var signupEmail = document.getElementById('signup-email');
var signupPassword = document.getElementById('signup-password');
var signinEmail = document.getElementById('signin-email');
var signinPassword = document.getElementById('signin-password');
var arr = [];
if (!localStorage.getItem('Users')){
    arr = [];
} 
else {
    arr = JSON.parse(localStorage.getItem('Users'));
}
var username = localStorage.getItem('sessionUsername');
if (username){
    document.getElementById('name').innerHTML = `Welcome ${username}`;
}
function IsExistSignUp() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].Email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false;
        }
    }
}

function signUp() {
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        document.getElementById('exist').innerHTML =
            '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }
    var signup = {
        name: signupName.value,
        Email: signupEmail.value,
        Password: signupPassword.value,
    };
    if (IsExistSignUp() == false) {
        document.getElementById('exist').innerHTML =
        '<span class="text-danger m-3">Email already exists</span>';
    } else {
        arr.push(signup);
        localStorage.setItem("Users", JSON.stringify(arr));
        document.getElementById('exist').innerHTML =
            '<span class="text-success m-3">Success</span>';
    }
}

function logIn() {
    if (signinEmail.value == "" || signinPassword.value == "") {
        document.getElementById('exist').innerHTML =
            '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }
    var password = signinPassword.value;
    var email = signinEmail.value;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].Email.toLowerCase() == email.toLowerCase() && arr[i].Password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', arr[i].name);
            window.location = "home.html";
        } else {
            document.getElementById('exist').innerHTML =
            '<span class="text-danger m-3">Incorrect email or password</span>';
        }
    }
}
function logOut() {
    localStorage.removeItem('sessionUsername');
}
