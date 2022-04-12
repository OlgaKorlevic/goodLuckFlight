let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;
// clear all images
function reset(){
    for(let i=0; i< sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}
//Init slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}
//show prev
function slideLeft(){
  reset();
  sliderImages[current -1].style.display = 'block';
    current--;
}
//show next

function slideRight(){
    reset();
    sliderImages[current +1].style.display = 'block';
      current++;
  }

//Left arrow click
arrowLeft.addEventListener('click', function(){
if(current === 0){
   current = sliderImages.length; 
}
slideLeft();
})
//Right arrow click
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
       current = -1; 
    }
    slideRight();
    })

startSlide();

// login page

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
// Get data


//validate data
function checkFormIsValid(form){
    displayErr= "";
    if ( ( form.flighttype[0].checked == false ) && ( form.flighttype[1].checked == false ) ) 
    {
        alert ( "Please select your Flighttype: Oneway or Roundtrip" ); 
        return false;
    }//radio buttons
    
   if (displayErr= "") { form.submit() } else {
        alert("Congratulations your booking is done and you will soon receive your booking details in your specified email!");
    }
    


    } //end of form validation



