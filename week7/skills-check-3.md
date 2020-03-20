Week 7, Day 1 Review

This morning review is scheduled to take place after the students have completed the third skills check. The content for this review should be very flexible depending on student preference and need. The suggested review theme and material included below should be considered subsequent material and as such should be used in the case there are few outstanding student preferences and needs for this review time.

## Important Concepts to Review

1. What is whiteboarding? Why is whiteboarding an important skill to practice?
2. What does whiteboarding accomplish for the interviewer?
3. Whiteboarding Steps
    - Clarify the Question
    - Function Signature
    - Sample Data and Corresponding Output
    - Pseudocode
    - Solve
    - Test with Sample Data

## Review

NOTE: This review is not meant to be rigid in structure, the focus should be on helping students understand the whiteboarding process structure, best practices for the whiteboarding exercise, and key takeaways from the exercise for both the student and the interviewer. Be sure to help students understand that the focus of the whiteboarding process isn't necessarily to see if you can solve the problem, but rather to see if you can communicate, ask questions and structure a way to go about solving the problem.

### What is Whiteboarding and why is it relevant / important to me?

1. Begin the review by introducing whiteboarding exercises, explaining the whiteboarding general format, and talking about when and how often they are used in the interview setting (used to be very popular, but have become increasingly less popular over time).

2. Next, talk about why whiteboarding is important - even if you never have to whiteboard in an interview setting. Some possible reasons could include:
    - Being prepared in case you are ever asked to whiteboard in an interview
    - Understanding and feeling comfortable using a structured format for problem solving
    - Connecting the process of problem solving with communication
        - Many times we are able to solve the problem, but being able to communicate how you solved that problem adds a deeper level of understanding that is valuable when working in a cooperative / team environment
    - Succintly being able to communicate step by step what you are thinking as you try to solve a problem
        - This communication could allow for your interviewer to help guide you if you get stuck or need help moving forward with solving the problem
        - This communication also is a way to demonstrate your underlying understanding of the constructs and environments associated with solving this problem (e.g., able to demonstrate understanding of JavaScript and how that differs from other languages like C++, etc.)
    - Being able to communicate what you have done and where you are getting stuck will also help expedite the proces for helping you move on with problems that you encounter
    - Understanding how you think through problems will help others teach or coach you through difficult concepts / constructs
    - Demonstrates humility and ability to learn if you are communicating throughout the entire process

3. Walk through the whiteboarding steps, describe each step and what they each mean and provide an example for each step related to the below whiteboarding problem

    - Problem: Create a function called OddCounter that takes in an array of numbers and returns a count of the total number of the odd numbers in the array 

    1. Clarify the Question
        - Ask about edge case scenarios
            - What happens if there aren't any odd numbers in the array?
            - Will the numbers be integers or can they be decimal numbers?
        - Ask about data types
            - Will the numbers in the array that's passed in always be numbers?
            - Will the returned value always be a number greater than or equal to 0?
    
    2. Function Signature
        - Write out the basic function indicating any parameters associated with the function and the data types associated with it
            - function OddCounter(array) => number - the oddCounter function takes in an array and returns a number
        - GLOBAL COMMENT FOR THIS EXERCISE: Make sure that you practice writing on a whiteboard so your writing is legible
    
    3. Sample Data and Corresponding Output
        - [1,2,3,4,5] => 3
        - [12,14,16] => 0
    
    4. Pseudocode
        - This is the step where you explain step by step how you would go about solving the problem using keywords and phrases to demonstrate understanding
        - IMPORTANT: Take time at this step to explain to students that this is the most important part of the exercise because of the purpose of whiteboarding as discussed earlier. Employers want to know how you solve problems and how you think about solving the problem before you even start writing the code
            - First, I would setup the OddCounter function that takes in an array
            - Then I would create a new variable called odds initialized to 0 to store the number of odd numbers found in the array
            - Then I would loop over the array using a forEach array method
            - At each element in that array, I would check using the modulus to see if the element when divided by 2 gave a remainder of 1
                - If it did have a remainder of 1, then I would increment the value of odds by 1
            - Once that method was completed, I would return odds from the function
        - After this step is completed, the interviewer should feel confident that they could - with some accuracy - predict the way the code would be written if asked to solve the problem using code
    
    5. Solve
        - The key to note here is that more often than not, if you have written good psuedocode up to this point and solved the problem correctly, the interviewer may not even ask you to write the code at this stage
        - If you have provided good pseudocode and you are asked to write the code to solve the problem, you should now have a step by step guide as to how to code the solution
        - Another key item to note here is that many students get flustered with the question, skip the psuedocode step, and dive right into writing the code to solve the problem - this is exactly what we don't want you to do
        - Also important to note here that syntax and brackets are important and if handled carelessly may reflect poorly on your JavaScript and problem solving ability
        - Last important note here - make sure that as you are writing out the code that you are still communicating what you are doing as you do it, no awkward silences
    
    6. Test with Sample Data
        - Again, the focus here is to make sure that given the data you provided for sample data, does the corresponding output match what you assumed at the beginning of the exercise?
        - It is important at this stage - if you get to it - to test the edge case examples to make sure it is working for those cases as well
    
4. Now that you have walked through this exercise with students, answer any lingering questions they may have before moving on to the individual practice. In the individual practice, have the students break up into pairs and practice walking through the first 4 steps of the whiteboarding process together. Be sure to instruct them to write out in plain English step by step what they are doing, but not to code through it. One of the students should then be assigned the role of interviewer and the other the role of interviewee. Give the students 10-12 minutes to practice the first problem below in their respective roles. Afterwards, give them 3-5 minutes to talk about what went well and what could be improved, then switch places and repeat.

    - Problem 1: Create a function called reverser that takes in a string, reverses it, and returns it reversed from the function
    - Problem 2: Create a function called fizzBuzz that takes in an array of numbers and returns that same array of numbers with the numbers divisible by 3 replaced with the word 'Fizz', the numbers divisible by 5 replaced with the word 'Buzz', and the numbers divisible by both 3 and 5 replaced with the word 'FizzBuzz'

5. Lastly, gather back together as a group and talk about what was learned, what worked, what didn't, what was uncomfortable, etc.

