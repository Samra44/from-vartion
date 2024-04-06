document.addEventListener("DOMContentLoaded", function () {
 document.getElementById("From").addEventListener("submit",function (event) {
    var name = document.getElementById('name').value;
    var pass = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('number').value;
    var gender = document.getElementById('input[name=gender]:checked');
    var checkbox = document.getElementById('checkbox').checked ?'yes':'No';
    var explain = document.getElementById('explain').value;
    var option = document.getElementById ('country').value;
    nameRegex = /^[A-Za-z/s]+$/;
    passRegex = /^[/dA-Za-z/W]+$/;
    emailRegex = /^[/dA-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/;
    telRegex = /^[/d]+$/;
    if(name == ''|| pass == ''|| email == '' || !gender || option == 'no country' || !nameRegex.
    test (name) || !PassRegex.test(pass)||!emailRegex.test(email)||!telRegex.test(tel)){
        alert('please fill the data with vaild field');
    } else {
        alert('NAME:' + name + '\npassword:' + pass + '\nEmail:'+ email + '\nNumber:' + tel + '\nGender:' +
        gender.value + '\ndo you agree:' + checkbox + '\nsuggestion:' + '\ncountry Name' + option);
    }
}) ;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 















});

