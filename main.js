//Code to pick the trip type fight:
//1. returns the chosen type or message if none is chosen DONE

    function tripType() {         
        let selectedTrip='';
        if(document.getElementById('oneWay').checked) {
            //Code in green showed which buttons were chosen.
            //document.getElementById("disp").innerHTML
              //  = document.getElementById("oneWay").value
              //  + " radio button checked";
        selectedTrip=document.getElementById('oneWay').value;
        document.getElementById("disp").innerHTML = "";
        //return selectedTrip;
        return true;
        }
        else if(document.getElementById('return').checked) {
        selectedTrip=document.getElementById('return').value;
        document.getElementById("disp").innerHTML = ""
        //return selectedTrip;
        return true;
                    }
        else {
        document.getElementById("disp").innerHTML = "Trip type is not selected";
        //return selectedTrip;
        return false;
        
                }
    }


//Code that hides return when One Way and shows it back when Return is chosen DONE
function hideReturn() {
    let ret = document.getElementById('ret');
    let retlb = document.getElementById('retlb');
        if (document.getElementById('oneWay').checked) {
          ret.style.display = 'none';
          retlb.style.display = 'none';
          document.getElementById("disp").innerHTML = "";
        }else if (document.getElementById('return').checked){
        ret.style.display = 'inline-block';
        retlb.style.display = 'inline-block';
        document.getElementById("disp").innerHTML = "";
        }
      }



//Code for choice of dates
//1.Checks that departure date is earlier than return===OPTIONAL, LATER
//2.Checks that both dates (or one if Return is not available) are chosen (needs to assign it to 
//Submit button) DONE


function flightDates (){
    let departureDate = document.getElementById('dep').value;
    let returnDate = document.getElementById('ret').value;
    let tripSelected=tripType();
    if (tripSelected==='') {
    document.getElementById("disp2").innerHTML = "Did you choose the trip type?";
    return false;}
    else{
   if (departureDate===''){
    document.getElementById("disp2").innerHTML = "Select the date(s)";
    return false;
    }  else if (tripSelected==='return' && returnDate===''){
    document.getElementById("disp2").innerHTML = "Select the date(s)";
    return false;
} else if (tripSelected==='oneWay'){
    document.getElementById("disp2").innerHTML = "";
    //returnDate="not applicable";
    //return departureDate;
    //return returnDate;
    return true;
}
else {
    document.getElementById("disp2").innerHTML = "";
    //document.getElementById("disp2").innerHTML= 'departure'+departureDate+'return'+returnDate;//
    //Code to check which dates the function returns if it works
   //return departureDate, returnDate;
    return true;
  };
};
}; 

//Code for choice of meals:
//1. Checks that the meal is chosen DONE


function mealChoice (){
    const mealChosen=document.getElementById('meal').value 
        if (mealChosen == "nochoice") {
        document.getElementById("disp3").innerHTML = "Please select the meal option";
        return false;
        }else{
        //Code in green was to check whih meal value will be returned returned
        //document.getElementById("disp3").innerHTML = "Chosen meal"+mealChosen;
        document.getElementById("disp3").innerHTML = "";
        //return mealChosen;
        return true;
}
}

//Code for choice of payment methods
//1. Checks that the payment option is chosen DONE

function payment (){
    const paymentOption=document.getElementById('payment').value 
        if (paymentOption == "nochoice") {
        document.getElementById("disp4").innerHTML = "Please select the payment option";
        return false;
        }else{
        //Code in green was to check whih meal value will be returned returned
        //document.getElementById("disp4").innerHTML = "Payment option"+paymentOption;
        document.getElementById("disp4").innerHTML = "";
        //return paymentOption;
        return true;
}
}

//SINDHU AND PRASOONA'S CODES
form.addEventListener ('submit', (e) => {
  e.preventDefault(); //prevents the auto submission of the form
  const form = document.getElementById("form");
  firstName();
  firstName2();
  firstName3();
  lastName();
  lastName2();
  lastName3();
  age();
  age2();
  age3();
  genderCheck();
  genderCheck2();
  genderCheck3();
  tripType();
  flightDates();
  mealChoice();
  payment();
  email();
  phone();
  destination();
  address();
  postcode();
  //successMessage();
  const country = document.getElementById("country").value;
  //const error = document.getElementById("error");
  //var messages = [];
  //const errorElement = document.getElementById('error');
  //     errorElement.innerText = messages;
  //     }​*/
  });
/*
  const el=function successMessage(){
  const elements = [
    firstName(),//0
    firstName2(),//1
    firstName3(),//2
    lastName(),//3
    lastName2(),//4
    lastName3(),//5
    age(),//6
    age2(),//7
    age3(),//8
    genderCheck(),//9
    genderCheck2(),//10
    genderCheck3(),//11
    tripType(),//12
    flightDates(),//13
    mealChoice(),//14
    payment(),//15
    email(),//16
    phone(),//17
    destination(),//18
    address(),//19
    postcode()//20
  ]
  //const el = elements.every(el);
  if (elements.every(el))
  {
    console.log(elements.every(el));
    document.getElementById("success").innerHTML = "Congratulations your booking is done!";
  }
  //console.log(elements);
  // expected output: true*/
 
 /* elements.every(function (e) {
    if (e===false){
    document.getElementById("success").innerHTML = "";
         }
     else{
    document.getElementById("success").innerHTML = "Congratulations your booking is done!";
         }
     console.log(elements);
});*/
  //};


  //Check how this function works

/*
function successMessage( {
elements.every(element);
  if (element===true){
    document.getElementById("success").innerHTML = "Congratulations your booking is done!";    
  }else{
    document.getElementById("finalerror").innerHTML = "You need to fill all the fields correctly";          
  }
}*/

/*
let successMessage = elements.every(function (e) {
    return e = true;
    document.getElementById("success").innerHTML = "Congratulations your booking is done!";
  });
*/



  const re = /^[\w ]+$/;
  function whiteSpace (value){
    return value.indexOf(' ') >= 0;
 }


  //New validation function for First name
  function firstName (){
    let firstName= document.getElementById('pName').value;
   // let whiteSpace=whiteSpace(firstName);
    if (firstName===''){
      document.getElementById("fName-error").innerHTML = "Please write the first name";  
      return false;
    }
    else if(!isNaN(firstName[0]) || firstName[0] === " ")
    {
    document.getElementById("fName-error").innerHTML = "First name cannot start with a number or space";
    return false;
        }
    else if (!re.test(firstName)) {
    document.getElementById("fName-error").innerHTML = "First name contains invalid characters";
    return false;
    }
    else if(whiteSpace(firstName)==true){
      document.getElementById("fName-error").innerHTML = "First name contains white spaces";
      return false;}
    else if (firstName.length > 20){
        document.getElementById("fName-error").innerHTML = "First Name is more than 20 characters";
        return false;
                    }
             else {
      document.getElementById("fName-error").innerHTML = ""; 
      //return firstName;
      return true;
          }     }
 

  
  
function firstName2 (){
    let firstName2= document.getElementById('p2Name').value;
    if (firstName2===''){
      document.getElementById("f2Name-error").innerHTML = "Please write the first name"; 
      return false; 
          }
    else if(!isNaN(firstName2[0]) || firstName2[0] === " ")
          {
    document.getElementById("f2Name-error").innerHTML = "First name cannot start with a number or space";
    return false;
              }
    else if (!re.test(firstName2)) {
    document.getElementById("f2Name-error").innerHTML = "First name contains invalid characters";
    return false;
          }
          else if(whiteSpace(firstName2)==true){
            document.getElementById("f2Name-error").innerHTML = "First name contains white spaces";
            return false;
          }
      
          else if (firstName2.length > 20){
              document.getElementById("f2Name-error").innerHTML = "First Name is more than 20 characters";
              return false;
                          }
                   else {
            document.getElementById("f2Name-error").innerHTML = ""; 
            //return firstName2;
            return true;
                }     }
  
              function firstName3 (){
                let firstName3= document.getElementById('p3Name').value;
                if (firstName3===''){
                  document.getElementById("f3Name-error").innerHTML = "Please write the first name";  
                  return false;
                      }
                else if(!isNaN(firstName3[0]) || firstName3[0] === " ")
                      {
                document.getElementById("f3Name-error").innerHTML = "First name cannot start with a number or space";
                return false;
                          }
                else if (!re.test(firstName3)) {
                document.getElementById("f3Name-error").innerHTML = "First name contains invalid characters";
                return false;
                      }
                      else if(whiteSpace(firstName3)==true){
                        document.getElementById("f3Name-error").innerHTML = "First name contains white spaces";
                        return false;}
                  
                      else if (firstName3.length > 20){
                          document.getElementById("f3Name-error").innerHTML = "First Name is more than 20 characters";
                          return false;
                                      }
                               else {
                        document.getElementById("f3Name-error").innerHTML = ""; 
                        //return firstName3;
                        return true;
                            }     }

  //New validation function for Last name
                function lastName (){
                let lastName= document.getElementById('lName').value;
                if (lastName===''){
                  document.getElementById("lName-error").innerHTML = "Please write the last name";  
                  return false;
                      }
                else if(!isNaN(lastName[0]) || lastName[0] === " ")
                      {
                document.getElementById("lName-error").innerHTML = "Last name cannot start with a number or space";
                return false;
                          }
                else if (!re.test(lastName)) {
                document.getElementById("lName-error").innerHTML = "Last name contains invalid characters";
                return false;
                      }
                      else if(whiteSpace(lastName)==true){
                        document.getElementById("lName-error").innerHTML = "Last name contains white spaces";
                        return false;}
                  
                      else if (lastName.length > 20){
                          document.getElementById("lName-error").innerHTML = "Last Name is more than 20 characters";
                          return false;
                                      }
                               else {
                        document.getElementById("lName-error").innerHTML = ""; 
                       // return lastName;
                        return true;
                            }     }




                          function lastName2 (){
                            let lastName2= document.getElementById('l2Name').value;
                            if (lastName2===''){
                              document.getElementById("l2Name-error").innerHTML = "Please write the last name";  
                              return false;
                                  }
                            else if(!isNaN(lastName2[0]) || lastName2[0] === " ")
                                  {
                            document.getElementById("l2Name-error").innerHTML = "Last name cannot start with a number or space";
                            return false;
                                      }
                            else if (!re.test(lastName2)) {
                            document.getElementById("l2Name-error").innerHTML = "Last name contains invalid characters";
                            return false;
                                  }
                                  else if(whiteSpace(lastName2)==true){
                                    document.getElementById("l2Name-error").innerHTML = "Last name contains white spaces";
                                    return false;}
                              
                                  else if (lastName2.length > 20){
                                      document.getElementById("l2Name-error").innerHTML = "Last Name is more than 20 characters";
                                      return false;
                                                  }
                                           else {
                                    document.getElementById("l2Name-error").innerHTML = ""; 
                                   // return lastName2;
                                    return true;
                                        }     }
  
  
                                      function lastName3 (){
                                        let lastName3= document.getElementById('l3Name').value;
                                        if (lastName3===''){
                                          document.getElementById("l3Name-error").innerHTML = "Please write the last name"; 
                                          return false; 
                                              }
                                        else if(!isNaN(lastName3[0]) || lastName3[0] === " ")
                                              {
                                        document.getElementById("l3Name-error").innerHTML = "Last name cannot start with a number or space";
                                        return false;
                                                  }
                                        else if (!re.test(lastName3)) {
                                        document.getElementById("l3Name-error").innerHTML = "Last name contains invalid characters";
                                        return false;
                                              }
                                              else if(whiteSpace(lastName3)==true){
                                                document.getElementById("l3Name-error").innerHTML = "Last name contains white spaces";
                                                return false;}
                                          
                                              else if (lastName3.length > 20){
                                                  document.getElementById("l3Name-error").innerHTML = "Last Name is more than 20 characters";
                                                  return false;
                                                              }
                                                       else {
                                                document.getElementById("l3Name-error").innerHTML = ""; 
                                                //return lastName3;
                                                return true;
                                                    }     }

  //New validation function for Age
  function age(){
  let age = document.getElementById('age').value;
  //for (let i=0; i<age.length; i++)
   // {
     // if (age[i] === " ")
     // {
 // document.getElementById("age-error").innerHTML = "Age cannot contain spaces";
    //  }
   // }
  if (age===''){
      document.getElementById("age-error").innerHTML = "Please fill in the age"; 
      return false; 
      }
  else if (!age.match(/^\d+/)) {
    document.getElementById("age-error").innerHTML = "Invalid format for the age";
    return false;
        }  
  else if (age < 18)
  {
document.getElementById("age-error").innerHTML = "Adult passenger should be more than or equal to 18 years of age";
return false;
  }else {
document.getElementById("age-error").innerHTML = "";
//return age;
return true;
}
}

  function age2(){
    let age2 = document.getElementById('age2').value;
//    for (let i=0; i<age2.length; i++)
//      {
//        if (age2[i] === " ")
//        {
 //   document.getElementById("age2-error").innerHTML = "Age is a number and cannot contain spaces";
  //      }
  //    }
    if (age2===''){
        document.getElementById("age2-error").innerHTML = "Please fill in the age";
        return false;  
        }
        else if (!age2.match(/^\d+/)) {
          document.getElementById("age2-error").innerHTML = "Invalid format for the age";
          return false;
              }  
    else if (age2 < 18)
       {
    document.getElementById("age2-error").innerHTML = "Adult passenger should be more than or equal to 18 years of age";
    return false;
       }else {
    document.getElementById("age2-error").innerHTML = "";
    //return age2;
    return true;
    }
    }

    function age3(){
      let age3 = document.getElementById('age3').value;
      //for (let i=0; i<age3.length; i++)
     //   {
     //     if (age3[i] === " ")
      //    {
     // document.getElementById("age3-error").innerHTML = "Age is a number and cannot contain spaces";
     //     }
    //    }
      if (age3===''){
          document.getElementById("age3-error").innerHTML = "Please fill in the age";  
          return false;
          }
          else if (!age3.match(/^\d+/)) {
            document.getElementById("age3-error").innerHTML = "Invalid format for the age";
            return false;
                }  
      else if(age3>=18) {
        document.getElementById("age3-error").innerHTML = "The passenger can't be older 18 or older"; 
        return false;
        }else{
              document.getElementById("age3-error").innerHTML = "";
        //return age3;
        return true;
      }
      };
  
  
  //    document.getElementById("submit-error").innerHTML = "** Congratulations your booking is done and you will soon receive your booking details in your specified email! **";
  // //    if (messages.length > 0)
  //     {
  //         e.preventDefault();
  //         errorElement.innerText = messages.join(', ');
  //     }
  //     else
  //     {
  //     messages.push("***** Congratulations your booking is done and you will soon receive your booking details in your specified email! *****")
  //     errorElement.innerText = messages;
  //     }​*/
  
//New validation function for Gender
function genderCheck(){  
let gender='';
if(document.getElementById('male').checked) {
gender=document.getElementById('male').value;
document.getElementById("gender-error").innerHTML = "";
//return gender;
return true;
}
else if(document.getElementById('female').checked) {
gender=document.getElementById('female').value;
document.getElementById("gender-error").innerHTML = ""
//return gender;
return true;
    }
else {
document.getElementById("gender-error").innerHTML = "Gender is not selected";
//return gender;
return false;
      }
}

function genderCheck2(){  
  let gender2='';
  if(document.getElementById('male2').checked) {
  gender2=document.getElementById('male2').value;
  document.getElementById("gender-error2").innerHTML = "";
  //return gender2;
  return true;
  }
  else if(document.getElementById('female2').checked) {
  gender2=document.getElementById('female2').value;
  document.getElementById("gender-error2").innerHTML = ""
  //return gender2;
  return true;
      }
  else {
  document.getElementById("gender-error2").innerHTML = "Gender is not selected";
  //return gender2;
  return false;
         }
  }

  function genderCheck3(){  
    let gender3='';
    if(document.getElementById('male3').checked) {
    gender3=document.getElementById('male3').value;
    document.getElementById("gender-error3").innerHTML = "";
    //return gender3;
    return true;
    }
    else if(document.getElementById('female3').checked) {
    gender3=document.getElementById('female3').value;
    document.getElementById("gender-error3").innerHTML = ""
    //return gender3;
    return true;
        }
    else {
    document.getElementById("gender-error3").innerHTML = "Gender is not selected";
    //return gender3;
    return false;
            }
    }


    //Validation for email
const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z])+.([a-z]+)?$/;
function email(){
  let email = document.getElementById('email').value;
  if (email===''){
    document.getElementById("error1").innerHTML = "Please write the email";  
    return false;
    }
  else if (!regex.test(email)) {
    document.getElementById("error1").innerHTML = "Please enter a valid email";
    return false;
   }
   else{
    document.getElementById("error1").innerHTML = ""; 
    //return email;
    return true;
   }
} 
//Validation for phone number
const re1 = /^\d{10}$/;
function phone(){
let phone = document.getElementById('mobile').value;
if (phone===''){
  document.getElementById("error2").innerHTML = "Please enter your phone number"; 
  return false; 
  }
else if (!re1.test(phone) && isNaN) {
    document.getElementById("error2").innerHTML = "Please enter a valid phone number";
    return false;
  }
  else {
    document.getElementById("error2").innerHTML = ""; 
    //return phone;
    return true;
  }
}

//Validation for destination
function destination(){
let destination=document.getElementById('orig').value;
let origin=document.getElementById('destin').value;
if (destination === origin) {
document.getElementById("error3").innerHTML = "Destination cannot be same as origin";
return false;
  }
  else {
    document.getElementById("error3").innerHTML = ""; 
    //return destination;
    //return origin;
    return true;
  }
}

//Validation for address
function address(){
const pasAd = document.getElementById('address').value;
if (pasAd===''){
  document.getElementById("error4").innerHTML = "Please enter your address"; 
  return false; 
  }
else {
    document.getElementById("error4").innerHTML = ""; 
    //return pasAd;
    return true;
  }
}

//Validation for postcode
const pin = /^\d{4}$/;
function postcode(){
  let postcode = document.getElementById('postcode').value;
if (postcode===''){
    document.getElementById("error5").innerHTML = "Please enter your postcode";
    return false;  
    }
else if (!pin.test(postcode) && isNaN) {
      document.getElementById("error5").innerHTML = "Please enter a valid postcode";
      return false;
    }
else {
      document.getElementById("error5").innerHTML = ""; 
      //return postcode;
      return true;
    }
}

  






  
  