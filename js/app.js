/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

var matCount = document.getElementById ('matCount');
matCount.innerHTML=11;

// console.log(matCount);
//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

var msgCount = document.getElementById('msgCount');
msgCount.innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

var fullName = document.getElementById('fullname');
fullName.innerHTML = 'Ronald McDonald';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

var age = document.getElementById ('age');
age.innerHTML = '63 years old';

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var divJob = document.createElement ("div");
divJob.id='job';
divJob.innerHTML = 'Clown and Restauranteur';
document.getElementById('data').appendChild (divJob);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var divHobbies = document.createElement ('div');divHobbies.id='hobbies';

divHobbies.innerHTML='Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
document.getElementById('data').appendChild(divHobbies);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var divLocation = document.createElement ('div');
divLocation.id = 'location';
divLocation.innerHTML = 'Honolulu, HI';

document.getElementById('data').appendChild(divLocation);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var divWants = document.createElement('div');
divWants.id = 'wants';
divWants.innerHTML = 'Looking for a Mrs. McDonald.';
document.getElementById('data').appendChild(divWants);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var divPro2 = document.createElement('p');
divPro2.id='pro2';
divPro2.innerHTML = "I'm looking for someone who will see the real me, beneath all of this clown makeup. Do you have x-ray vision?"
document.getElementById('profile').appendChild(divPro2);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var firstNameClass = document.getElementsByClassName('firstName');

firstNameClass[0].innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var otherAgeClass = document.getElementsByClassName ('otherAge');

otherAgeClass[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var statusClass = document.getElementsByClassName('status');

statusClass[0].innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

firstNameClass[1].innerHTML = 'Peko Chan';

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

otherAgeClass[1].innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto




