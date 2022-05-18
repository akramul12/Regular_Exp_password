// email pattern 

let email ='rexekraking@gmail.com';

let pattern = /[^a-z]*@[a-z]{2,}.[a-z]{2,5}$/;

console.log(pattern.test(email));





// username pattern

let username = 'Rexekraking';

let pattern =/^[A-Z]{1,5}.*[a-z]{2,9}$/;

console.log(pattern.test(username));







// Bangladeshi phone number pattern//

let number = '+8801750859343';

let pattern = /^(\+8801|01)[0-9]{9}$/;
console.log(pattern.test(number));






// password pattern 

let password ='Rex#@123';

let pattern =/^[A-Z1-9_.]{1,3}[@#$%&_(0-9)]{1,}$/i;

console.log(pattern.test(password));





// a zipcode pattern

let zipcode ='6271';

let pattern =/^[0-9]{1,6}$/;

console.log(pattern.test(zipcode));