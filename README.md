
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Alpha - Final

First final and functional version of the project called Calculator. Their principal function is emulate the basic operations of a calculator, including basic operations with decimals numbers

The first part of the develop was installing ESlint and add the Prettier configurations, plus i add the airbnb config for using this rules too.

Once all configured i started with the graphic part. For this i used CSS and some bootstrap classes for the style of the buttons and some containers. For show the buttons i use a grid-template-columns with a repetition of 4 for column for the operations buttons (with the last empty for the equal button that use the spaces 2,4,6 and 5 of the grid). Now, for show the buttons i made an empty array and then i filled with help of forEach operator (not map, because i don't need return data) inside the forEach i put a button etiquette (HTML) and i passed the data to value, key and between the etiquette of opening and closing for show the numbers. Besides that, i used the onClick property for use the value of the buttons and entry a value in the input with help of the function what i will explain later.

Then i passed to the functional part. I created just one component called *Calculator* who contains the most part of the code, but before that, in the principal component i created one useState who contains *'equation'* and *'setEquation'* for change the state of *'equation'*. *'Equation'* contains a object with a input, *initialValue*, *operation* and *secondValue* all of then initialized empty except for *input* that initialized in zero. The reason of this is because the flow of the info should be from the father to the children and because i didn't use a *useContext* for pass the data for being a small project.

Then in the *Calculator* component i created a flag with *useState* who contains *'operatorExist'* and *'setOperatorExist'* this is for know when the user entry a operation and control the entry of the *'initialValue'* and *'secondValue'*.

Then i made a destructuring of *'equation'* to hace a more clean code when i called parts of the object *'equation'*. 

Continuing with the funtions part, i developed the next functions: 

1. **displayInput**: This function is for add a *'initialValue'*. I used a *preventDefault* for avoid the refresh of the page, then i made a validation with a *while* loop for avoid entry multiple zero's then i used a *'setEquation'* function for made a copy of the state and add the value in the *input*.
2. **displaySecondInput**: This functions is for a similar objective, with the difference that this is for add the *'secondValue'*, for this i used a function which is located in the **helper.js**, this function is **'addSecondValue'** which work similar to the previous code, make a copy of the content of the state and then add the *'secondValue'*.
3. **displayDecimal**: This is for entry a dot to the *'initialValue'* or *'secondValue'* or both for do a reference a decimal number and avoid entry more than one dot.
4. **addOperation**: This add a operator to the state and allows change the operation at the same time.
5. **equal**: This function first validate if one of the elements of the object is empty this button do nothing. then if the object are correct filled the data pass to the function *'evaluate'* (located in the **helper.js**) and this is responsible of made the corresponding operation with the entrys.
6. **cleanAll**: This function leave everything as it was, clean and the input in zero.

For use this functions i used de *onClick* property for each of one of the buttons how corresponds. **'displayInput'** and **'displaySecondInput'** in the buttons of the numbers with the help of the flag *'operatorExist'* and a ternary operator. **'addOperator'** for each operator button, **'displayDecimal'** for the dot button, **'cleanAll'** for the AC button and finally **'equal'** for the equal button.

With regard to the *helpers* functions besides of **'addSecondValue'** i developed **'buildEquation'** that contains a *'switch'* statement for know which operator to use. The **'evaluate'** function, who contains a few *'if'* statement for evaluate the *'initialValue'* and *'secondValue'* depending of the operator choosing for the user. And that's it.

***note: in the 'evaluate' function had a second part that corresponded to when the user used one of the operator buttons for get a result, but i  couldn't do a code that works with just one click, the code in general actually works but need a second click for acumulate the operations  and I didn't know how to fix it.***


