## Toy 1:

note; for getting the basic solution to this challenge, open the toy-1-basic-solution.js

to see the webpage results in which the function solution manipulates the DOM view the toy-1-index.js


Question = 

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

for this solution we have to:
    
    1. Identify the inputs and outputs to have a grasp at what needs to be declared and what needs to be the return value

    2. Our input is student marks and the output is the grade

    let marks = `how many marks they got`

    3. In order to have the return value corresponding to the correct grades we will use the function element and if ... else if

    4. Note, use of the And operator (&&) to pass two conditions within the if and else if elements. That way if it satisfies one condition it will refer to the next


This is the end of this solution.

## Toy 1 - webpage

In order for us to see our code run within a webpage browser, we will use the index.html file and working on the DOM to run our Js code.

Note: I will be Using the html and css code framework I did for the webpage assignment in phase 0

in order to access the output data from the js file into the DOM, we need to access the id of the various input, button and result names in our js files. We then have to add an event listener that will allow for our results to be released once we click on the button


## Toy 2:

Note; for getting the basic solution to this challenge, open the toy-2-basic-solution.js

To see the webpage results in which the function solution manipulates the DOM view the toy-2-index.js

Question = 

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

for this solution we have to: