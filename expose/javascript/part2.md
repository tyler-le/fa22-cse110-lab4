#### 1. What will happen at line 12 and why? If the code causes an error, explain why.

Line 12 prints 3 because i is declared as var, meaning it can be accessed out of the for-loop. 3 is the last value that 'i' took on.

#### 2. What will happen at line 13 and why? If the code causes an error, explain why.

Line 13 prints 150 because discountedPrice is declared as var, meaning it can be accessed outside of the block is was defined in. 150 is the last value that was held in discountedPrice.

#### 3. What will happen at line 14 and why? If the code causes an error, explain why.

Line 14 prints 150 because that was the last value calculated in the last iteration. Since it was declared as var, we are able to access it outside of the block in which it was defined in.

#### 4. What will this function return? Give a brief explanation why. If the code causes an error, explain why

The function returns [ 50, 100, 150 ]. This is because in each iteration of the for-loop, we calculate the discountedPrice and, using that, we are able to determine the finalPrice. We then push this into an array called discounted. Once the for-loop ends, we return the discounted array.

#### 5. What will happen at line 12 and why? If the code causes an error, explain why.

We get an error because we defined 'i' using let, meaning it is only accessible within the block that it was defined in. Since we defined it in the for-loop, we can only access it inside the for-loop.

#### 6. What will happen at line 13 and why? If the code causes an error, explain why.

We get an error because we defined 'discountedPrice' using let and it was defined within the for-loop. This means it is only accessible within the for-loop and not outside of it.

#### 7. What will happen at line 14 and why? If the code causes an error, explain why.

It prints out 150 because finalPrice was declared in scope of the print statement. This means, even though we used let, we are able to still access it.

#### 8. What will this function return? Give a brief explanation. If the code causes an error, explain why.

The function returns [ 50, 100, 150 ]. This is because, in line 16, we return discounted. In line 3, we defined discounted using let, which is in the same block as the return statement.

#### 9. What will happen at line 11 and why? If the code causes an error, explain why.

We get an error because we defined 'i' using let, meaning it is only accessible within the block that it was defined in. Since we defined it in the for-loop, we can only access it inside the for-loop.

#### 10. What will happen at line 12 and why? If the code causes an error, explain why.

It prints out 3 because we pass prices in as a parameter and it contains a list of length 3. We then save this value to a const type. Since it isn't ever reassigned further down in the program, there will be no error.

#### 11. What will this function return? Give a brief explanation. If the code causes an error, explain why.

We return [ 50, 100, 150 ] because, even though discounted is const, const means that we cannot reassign the variable (which we never do). We are still allowed to modify the variable and push new values to it.

#### 12. Given the above Object, write the notation for:

###### A. Accessing the value of the name property in the student object

student.name;

###### B. Accessing the value of the Grad Year property in the student object

student["Grad Year"];

###### C. Calling the function for the greeting property in the student object

student.greeting();

###### D. Accessing the name property of the object in the Favorite Teacher property in student

student["Favorite Teacher"].name;

###### E. Access the first index in the array of the courseLoad property of the student object

student.courseLoad[0];

#### 13. Arithmetic

A. ‘3’ + 2 = '32'
B. ‘3’ - 2 = 1
C. 3 + null = 3
D. ‘3’ + null = '3null'
E. true + 3 = 4
F. false + null = 0
G. '3' + undefined = '3undefined'
H. '3' - undefined = NaN

#### 14. Comparison

A. ‘2’ > 1 => true
B. ‘2’ < ‘12’ => false
C. 2 == ‘2’ => true
D. 2 === ‘2’ => false
E. true == 2 => false
F. true === Boolean(2) => true

#### 15. Explain the difference between the == and === operators.

== is used to compare two variables, while ignoring datatypes. This is why 2 == '2' is true. When we use ===, it does the same thing but also checks for datatypes as well. This is why 2 === '2' is false.

#### 16. Check part2-question16.js

#### 17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md).

[2, 4, 6] is returned. In modifyArray, we pass a function called doSomething as our callback. This function takes in a num and returns twice that num. In the for-loop, we loop thru the passed in array. For each element of this passed in array, we call callback(array[i]) which returns 2\*array[i]. After computing this value, we push this into newArr. At the end, we return newArr or [2,4,6].

#### 18. Check part2-question18.js

#### 19. What is the output of the above code? (This should be in your part2.md)

1 4 3 2. This is due to the timeouts, delaying some numbers being printed immediately.
