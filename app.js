//              Chapter = 1 Alert 
// 1. Write a script to greet your website visitor using JS alert box
// // alert("Assalam alaikum");

// // 2. Write a script to display following message on your web page:
// // alert("Error! Please enter a valid Password");

// // 3. Write a script to display following message on your web
// // page: (Hint : Use line break)
// // document.write("Welcome to js land <br> happy_coding")

// // 4. Write a script to display following messages in sequence:
// // alert("Welcome to JS Land")
// // alert(" Happpy Coding")

// // 5. Generate the following message through browser’s
// // developer console:
// // console.log("Hello...I can run JS through my web Browse's console")

// // 6. Make use of alerts in your new/existing HTML & CSS project.
// alert("Hello JavaScript")

//          Chapter = 2 Variable FOr String

// 1. Declare a variable called username.
// var username

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName = "Salman Memon"

// 3. Write script to
// var message = "Hello World"
// alert(message)

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
//  var Name = "Salman Memon"
//  var age = "20 Years"
//  alert(Name +" "+ age)

// 5. Write a script to display the following alert using one JS variable:
// alert("Pizza \n pizz \n piz \n pi \n p")

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

// var message = "my email address is"
// var email = "example@example.com"
// alert (message+email)

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

// var book ="A smarter way to learn JavaScript"

// 8. Write a script to display this in browser through JS
//  document.write("I write Html content through javascript")

// 9. Store following string in a variable and show in alert and
// browser through JS

// alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")

//       Chapter = 3 Variable For Number

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

// var age=20
// alert("This is my age:"+ age)

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

// var site_number = 16
// alert("You have Visited this site" + site_number)

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
//  var birthYear = 1998
//  document.write(birthYear)

// 4. A visitor visits an online clothing store
// var visitor_name = "John"
// var product_name = "T-Shirts"
// var quantity = 5
// alert(visitor_name+" "+product_name+" "+quantity)


//          Chapter=4 Legal & Illegal

// 1. Declare 3 variables in one statement.
// var variable_1 = "Varible-1"
// var variable_2 = "Varible-2"
// var variable_3 = "Varible-3"

// 2. Declare 5 legal & 5 illegal variable names.
// Legal
// var var_1;
// var Var_legal;
// var varLegal;
// var var123;
// var Myvariable;

//illegal
// var 1var;
// var 1_variable;
// var *variale;
// var new&variable;
// var new variable;

// 3. Display this in your browser

// document.write("Rules for naming JS variables")
// document.write("Variable names can only contain numbers,$ and _ ")
// document.write("Variable names must begin with letter & or _ ")
// document.write("variable names are case senstive")
// document.write("variable names should not be js Keyword")

//          Chapter = 5 Math Expression

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var num1 = parseInt(prompt("Enter the 1st value"))
// var num2 = parseInt(prompt("Enter the 2nd value"))
// var sum = num1+num2
// alert("Sum of "+num1+" and "+num2+" is "+sum)

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// var num1 = parseInt(prompt("Enter the 1st value"))
// var num2 = parseInt(prompt("Enter the 2nd value"))
// var ans = num1-num2
// alert("Substration of "+num1+" and "+num2+" is "+ans)
// var ans = num1*num2
// alert("mul of "+num1+" and "+num2+" is "+ans)
// var ans = num1/num2
// alert("div of "+num1+" and "+num2+" is "+ans)

// 3. Do the following using JS Mathematic Expressions

// var val;
// document.write("var is "+val)
// val = 5
// document.write("value is "+ val)
// val++
// document.write("value is now "+val)
// val+=7
// document.write("Value is "+val)
// val--
// document.write("Value is "+val)
// val%=3
// document.write("Value is "+val)

// 4. Cost of one movie ticket is 600 PKR. Write a script to store

// document.write("Ticket Price is Rs:600PKR"+"<br>")
// var price = 600
// var tickets = 5
// var total = price*tickets
// document.write("Total cost is "+total)

// 5. Write a script to display multiplication table of any number in your browser

// document.write("table of 5")
// for(var i=1;i<=10;i++){
//     var table = i*5;
//     document.write(i+" * 5 ="+table+"<br>")
// }

// 6. The Temperature Converter: It’s hot out! Let’s make a converter

// var c=parseInt(prompt("Enter the temperature in C"))
// var F=parseInt(prompt("Enter the temp in F"))
//  F = (c * 9/5)+32
// document.write(c+"C is "+F+"F")
// c=(F-32)*5/9
// document.write(F+"F is "+c+"C")

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website
// var price_item_1 = parseInt(prompt("Enter price of 1st item: "))
// var quantity_item_1 = parseInt(prompt("Quatity of 1st item: "))
// var price_item_2 = parseInt(prompt("Enter price of 2nd item: "))
// var quantity_item_2 = parseInt(prompt("Quatity of 2nd item: "))
// var shipping = parseInt(prompt("Shipping charges"))
// var total = (price_item_1*quantity_item_1) + (price_item_2*quantity_item_2) + shipping
// alert("Total cost of Order :"+total)

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// var total_marks = parseInt(prompt("Enter total marks: "))
// var obtained_marks = parseInt(prompt("Enter obtained marks: "))
// var percentage = (obtained_marks/total_marks)*100
// alert(percentage)

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var US_cur = parseInt(prompt("Enter US-Dollars :"))
// var Saudi_cur = parseInt(prompt("Enter Saudi-Riyal :"))
// var total = (US_cur * 104.80) + (Saudi_cur* 28)
// alert("Total Currency in PKR "+total)

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence

// var num = 25
// var total = (num + 5 * 10) / 2
// alert(total)

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!

// var current_year = parseInt(prompt("Current Year: "))
// var birth_year = parseInt(prompt("Birth Year: "))
// var age = current_year - birth_year
// alert("Your age "+age)

//          Chapter = 6-9

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a =10
// ++a
// document.write("Now value of a :"+a)
// a++
// document.write("Now value of a :"+a)
// --a
// document.write("Now value of a :"+a)
// a--
// document.write("Now value of a :"+a)

// 2. What will be the output in variables a, b & result after
// execution of the following script:

// var a = 2 , b = 1
// var result =  --a - --b + ++b + b--
// document.write(result)

// 3. Write a program that takes input a name from user &
// greet the user

// var name = prompt("Enter your Name:")
// alert("Welcome "+name)

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default

// var table_number = parseInt(prompt("Enter table number: "))
// for(var i=1;i<=10;i++){
//     if(table_number === table_number){
//     var result = i*table_number
//     document.write(i+" * "+table_number+" = "+ result)
//     document.write("<br>")
//     }
//     else
//     {
//      result = i*5
//     document.write(i+" * 5"+" = "+ result)
//     document.write("<br>")
//     }
// }


//             Chapter = 9-10

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city = prompt("Enter city name")
// if(city === "karachi"){
//     alert("Welcome to city of light")
// }
// else{
//     alert("City not available")
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter gender")
// if(gender === "male"){
//     alert("Welcome sir")
// }
// else
// {
//     alert("Welcome Ma'am")
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var signal = prompt("Enter traffic signal")
// if(signal === "red"){
//     alert("Stop")
// }
// else if(signal === "yellow")
// {
//     alert("Ready to move")
// }
// else if(signal === "green"){
//     alert("Go")
// }
// else{
//     alert("Invalid")
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message

// var litres =parseFloat(prompt("Fuel of car"))
// if(litres <= 0.25){
//     alert("Please refill fuel in your car")
// }
// else{
//     alert("Go")
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true"); **********RUN
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");   *****NOT RUN
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true"); **********Condition 2 and 4 true
// }
// if(c === 14){
// alert("condition 4 is true"); 
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }                        *****NOT RUN
// if (false){
// alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat"); ******RUN CONDITION
//     }
    
// 6.Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table

// var marks = parseInt(prompt("Enter your Marks: "))
// if (marks >= 80 && marks <= 100){
//     alert("A-one\nExcellent")
// }
// else if (marks >= 70 && marks <= 80){
//     alert("A\nGood")
// }
// else if (marks >= 60 && marks <= 70){
//     alert("B\nYou need to improve")
// }
// else if (marks >= 50 && marks <= 60){
//     alert("Fail\nSorry")
// }
// else {
//     alert("Invalid Marks")
// }

// 7. Guess game:

// var Guess = parseInt(prompt("Guess Number: "))
// var Guess_num = 6
// if(Guess === Guess_num){
//     alert("Bingo! Correct")
// }
// else if(Guess === Guess_num+1 || Guess === Guess_num-1){
//     alert("You are too close")
// }
// else{
//     alert("Try Again")
// }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var num = parseInt(prompt("Enter number to check divide by 3 or not: "))
// if(num%3 === 0){
//     alert("Divide by 3")
// }
// else{
//     alert("Not divide")
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var num = parseInt(prompt("Enter number:"))
// if(num%2 === 0){
//     alert("Even")
// }
// else{
//     alert("Odd")
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria

// var temp = parseInt(prompt("Enter temp: "))
// if( temp > 40){
//     alert("Too Hot")
// }
// else if( temp > 30){
//     alert("Normal Weather")
// }
// else if( temp > 20){
//     alert("Cool")
// }
// else if( temp > 30){
//     alert("SO Cool")
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input

// var value_1 = parseInt(prompt("Enter 1st value"))
// var value_2 = parseInt(prompt("Enter 2nd value"))
// var ans
// var operator = prompt("Enter operator")
// if(operator === '+'){
//     ans = value_1+value_2
//     alert(ans)
// }
// else if(operator === '-'){
//     ans = value_1-value_2
//     alert(ans)
// }
// else if(operator === '*'){
//     ans = value_1*value_2
//     alert(ans)
// }
// else if(operator === '/'){
//     ans = value_1/value_2
//     alert(ans)
// }
// else if(operator === '%'){
//     ans = value_1%value_2
//     alert(ans)
// }

//          Chapter = 12-13

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter

// var character = prompt("Enter character")
// if(character >= 'A' && character <= 'Z'){
//     alert("UpperCase")
// }
// if(character >= 'a' && character <= 'z'){
//     alert("LowerCase")
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal

// var num1 = parseInt(prompt("enter 1st number"))
// var num2 = parseInt(prompt("enter 2nd number"))
// if(num1 > num2){
//     alert("1st number is larger")
// }
// else if(num1 < num2){
//     alert("2nd number is larger")
// }
// else if(num1 === num2){
//     alert("numbers are equal")
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var num = parseInt(prompt("enter number"))
// if(num > 0){
//     alert("number is Positive")
// }
// else if(num < 0){
//     alert(" number is Negative")
// }
// else if(num === 0){
//     alert("numbers is zero")
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// var character = prompt("Enter character: ")
// if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
//     alert("Vowel")
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords

// var password = prompt("Enter password: ")
// var mypswd = "salman"
// if(password === mypswd){
//     alert("Correct Password")
// }
// else{
//     alert("Incorrect")
// }

// 6. This if/else statement does not work. Try to fix it:

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";   **********ELSE { INCORRECT}
// }

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time = parseInt(prompt("Enter time in 24 hour formate"))
// if(time >= 0000 && time < 1200){
//     alert("Good morning")
// }
// else if(time > 1200 && time < 1700){
//     alert("Good Afternoon")
// }
// else if(time > 1700 && time < 2100){
//     alert("Good evening")
// }
// else if(time > 2100 && time < 2359){
//     alert("Good Night")
// }

//      CHAPTER= 14-16

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var student;

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var student_name = [];

// 3. Declare and initialize a strings array

// var name = ["Salman","Memon"]

// 4. Declare and initialize a numbers array

// var num = [12,106];

// 5. Declare and initialize a boolean array
// var cond = [true,false]

// 6. Declare and initialize a mixed array.
// var mix_arr = ["salman",1998]

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan 

// var education = ["SSC","HSC","BSC","BCOM","BS"]
// for(var i=0;i<education.length;i++){
//     document.write(education[i]+"<br>")
// }

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities array
// var cities = ["karachi","lahore","sukkur","hyderabad"]
// var selected=cities.slice(1,3)
// for(var i =0;i<selected.length;i++){
//     document.write(selected[i])
// }

// 12. Write a program to create a single string from the
// below mentioned array
// var arr = [ "This", "is", "my", "cat"]
// var new_arr = arr.slice(0)
// for(var i=1;i<=new_arr.length;i++){
//     document.write(new_arr[i])
// }

//  Chapter = 17-20
// 3. Write a program to print numeric counting from 1 to 10

// for(var i=1;i<=10;i++){
//     document.write(i+"<br>")
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user

// var table = parseInt(prompt("Enter table number:"))
// var table_length = parseInt(prompt("Enter length of table:"))
// for(var i=1;i<=table_length;i++){
//     var result = i*table
//     document.write(i+" * "+table+" = "+result)
//     document.write("<br>")
// }

// 5. Write a program to print items of the following array
// using for loop:

// var fruits = ["apple","banana","orange","mango"]
// for(var i=1;i<=fruits.length;i++){
//     document.write(fruits[i]+"<br>")
// }

// 6. Generate the following series in your browser. See
// example output

// document.write("Counting\n");
// for(var i=1;i<=10;i++){
//     document.write(i)
// }
// for(var i=10;i>=1;i--){
//     document.write(i)
// }
// for(var i=0;i<=100;i+=2){
//     document.write(i)
// }
// for(var i=1;i<=100;i+=2){
//     document.write(i+"k")
// }

// 7. You have an array 
// var abc = prompt("Enter fruit name: ")
// var arr = ["apple","banana","orange","mango"]
// for(var i=0;i<arr.length;i++){
//     if(arr[i] === arr[i]){
//         alert("Found your item")
//     }
//     else{
//         alert("There is no item ")
//     }
// }

// 10. Write a program to print multiples of 5 ranging 1 to 100
// for(var i=0;i<=100;i+=5){
//     document.write(i)
// }