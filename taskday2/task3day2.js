/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// solution
// function tellFortune(a,b,c,d,){
//     let malik="I will be"+" " +a+" "+"in"+" "+b +" ,"+"and married to"+" " +c+" with"+" " +d +" " +"kids";
//     return malik;
// }
// let d=tellFortune("Electrical Engineer","jordan","Donia",8);
// console.log(d);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
// solution
//  function  calculateDogAge(h){
//   let dogedg = h*7;
//   return dogedg;
//  }
//  let edg= calculateDogAge(30);
//  console.log("Your doggie is" +" " + edg +" " +"years old in dog years!");


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
// solution
// function calculateSupply (a,b){
//   let ma= a*b*365;
//   return ma;
// }
// let livecuptea= calculateSupply(70,3);
// console.log("You will need" +" " + livecuptea +" " +"cups of tea to last you until the ripe old age of 100");
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
// solution
// function greet(v){
//   return "Hello"+" " +v;
// }
// let text= greet("Malik");
// console.log(text);
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

 
function double(cat) {
  return 2 * cat;
} 

function double(7) {
  return 2 * 7;
}
function double(d) {
  return 2 * d;
}

function double('7') {
  return 2 * 'x';
}
  function double(f) {
  return 2 * f;
}
*/

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}
  func double1(x) {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

functiondouble2 (x){
return 2 * x;
}

function (x) double3 {
  return 2 * x;

function double3(x) {
  return 2 * x;
}
*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
// solution
// function cube(t){
//   let u= t*t*t;
//   return u;
// }
// let y= cube(3);
// console.log(y);

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
// solution
// function multiply(s,k){
//   let g= s*k;
//   return g;
// }
// let r= multiply(5,8);
// console.log(r);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
// solution
// function canIGetADrivingLicense(d){
//   if(d>=20){
//     return "yes you can";
//   }else{
//     let y= "please come back after" +" " + (20-d) +" " +"years to get one";
//     return y;
//   }
// }
// let u= canIGetADrivingLicense(10);
// console.log(u);

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
// solution
// function sameLength(st1,st2){
//   if(st1.length == st2.length){
//     return "true";
//   }else{
//     return "false";
//   }
// }
// let f= sameLength("malik","malik");
// console.log(f);

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
// solution
// function largerNubmer(nu1,nu2){
//   if (nu1>nu2){
//     return nu1;
//   }else{
//     return nu2;
//   }
// }
// let large= largerNubmer(16,8);
// console.log(large);

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
// solution
// function smallerNubmer(nub1,nub2,nub3){
//   if(nub1<=nub2 && nub1<=nub3){
//     return nub1;
//   }else if( nub2<= nub1 && nub2<=nub3){
//     return nub2;
//   }else{
//     return nub3;
//   }

// }
// let smallenum= smallerNubmer(9,9,12);
// console.log(smallenum);

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
// solution/
// function shorterString(str1,str2,str3,str4,str5){
//   let arraystr=[str1,str2,str3,str4,str5];
//   let shortstr= str1;
//   for (let g of arraystr) {
//     if(g.length<shortstr.length){
//       shortstr=g;
//     }
    
//   }return shortstr;
// }
// let r= shorterString("air","tfdr","car","github","by");
// console.log(r);

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
// solution
// function longerString(a,b,c,d){
//   logerstr=[a,b,c,d];
//   let longst=a;
//   for (let i of logerstr) {
//     if(i.length>longst.length){
//       longst=i;
//     }
    
//   }return longst;

// }
// let long= longerString("air","school","car","github");
// console.log(long);

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
// solution
// function isEven(evnum){
//   if(evnum %2 == 0){
//     return "true";
//   }else{
//     return "false";
//   }

// }
// let chickeven= isEven(2);
// console.log(chicknum);

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
// solution
// function isOdd(oddnum){
//   if(oddnum %2 !=0){
//     return "true";
//   }else{
//     return "false";
//   }
// }
// let chickodd= isOdd(3);
// console.log(chickodd);

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
// solution
// function positive(postnum){
//   if(postnum>=0){

//     return postnum;
//   }else {
//     return postnum*-1;
//   }
// }
// let postnu= positive(4);
// console.log(postnu);


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
// solution
// function fullName(a,b){
//   let fname= a +" "+ b;
//   return fname;
// }
// let funame= fullName("Alex", "Mercer");
// console.log(funame);


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
// solution
// function average(a,b,c,d,e){
//   let aver=(a+b+c+d+e)/5;
//   return aver;
// }
// let averg= average(5,7,9,3,5);
// console.log(averg);

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
// solution
// function randomNumber(){
//     return Math.random();
// }
// let rand= randomNumber();
// console.log(rand);

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
// solution
// function randomBetweenNumbers(min, max) {
//   return Math.random() * (max - min) + min;
// }
// let randbetween= randomBetweenNumbers(1,8);
// console.log(randbetween);


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
// solution
// function scoreInUniversty(w){
//   if(w>=95 && w<=100){
//     return "A";
//   }else if(w>=85 && w<=94){
//     return "B";
//   }else if(w>=70 && w<=84){
//     return "C";
//   }else if(w>=50 && w<= 69){
//     return "D"
//   }else{
//     return "F"
//   }
// }
// let score= scoreInUniversty(96);
// console.log(score);
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
// solution
// function counter(){
//   let count=-1;
//   return function add(){
//     return count+=1;

//   }
// }
// const addt =counter();
// console.log(addt());
// console.log(addt());
// console.log(addt());
// console.log(addt());




/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
// solution

//  function counter(){
//   let count=-1;
//   let obj= {
//     add(){
//       return count+=1;
//     },
//     reset(){
//       let oldcount= count;
//       count=-1;
//       return oldcount +" and the counter reset now";
//     }
//   };
//   return obj;
// }
// let malik = counter();
// malik.add();
// console.log(malik.add());
// console.log(malik.add());
// console.log(malik.add());
// console.log(malik.add());
// console.log(malik.add());
// console.log(malik.reset());
// console.log(malik.add());
// console.log(malik.add());
// console.log(malik.add());
// console.log(malik.add());
// console.log(malik.add());
//  function counter(){
//     let count=-1;
//     function add(){
//       return count+=1;
  
//     }
//     function  resetCounter(){
//       let savecount= count ;
//       count=-1;
//       return savecount + "and the counter reset now";
//     }
//     return { add , resetCounter};
//   }
//   let coun= counter();
//   console.log(coun.add());
//   console.log(coun.add());
//   console.log(coun.add());
//   console.log(coun.add());
//   console.log(coun.resetCounter());
//   console.log(coun.add());
//   console.log(coun.add());
//   console.log(coun.add());

  