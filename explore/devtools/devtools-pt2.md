#### 1. What was the bug?

The issue is that num1 and num2 are not numbers but strings. Hence when we do num1+num2, we are actually concatenating strings together.

#### 2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use)

After grabbing the string on lines 4 and 5, I would call the parseInt function on that value to cast it to a number. Then, when we call calculateSum(num1, num2), the parameters will be numbers instead of strings so it will add correctly.
