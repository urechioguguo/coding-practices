/* 

1. Create two to four lists of words or phrases. Each list should have some sort of theme, or be similar in some way. As a guiding principle, each list should have 5+ items to start. Your lists should be separate in some way (in theme, purpose, or structure).

2. Write the formula for selecting a random element from an array. Use string interpolation to swap out one of the words in the poem for a randomly selected element from your list.

Hint: Formula for selecting a random element from an array
let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];

3. Write a function that logs the randomized poem to the console.

4. Invoke (call) the function to run the poem.

5. Check the console for the result.

Sample Poem: // A house of steel / Among high mountains / Using candles / Inhabited by people who sleep almost all the time.

*/

let array_one = [
    "a house of wood",
    "a house of brick",
    "a house of broken dishes",
    "a house of discarded clothing",
    "a house of dust"
  ];
  
  let array_two = [
    "within thick ice",
    "around sharp shards",
    "members playing cards",
    "in a bed of lies",
    "an august night's rain"
  ];
  
  let array_three = [
    "full of life and satisfied",
    "nevertheless love persists",
    "burnt out candles",
    "head in the clouds",
    "an element of destruction"
  ];
  
  //let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];
  
  let element_from_array_one =
    array_one[Math.floor(Math.random() * array_one.length)];
  
  let element_from_array_two =
    array_two[Math.floor(Math.random() * array_two.length)];
  
  let element_from_array_three =
    array_three[Math.floor(Math.random() * array_three.length)];
  
  function renderpoem() {
    let poem = document.querySelector(".poem");
  
    let paragraph = document.createElement("p");
    paragraph.textContent =
      element_from_array_one +
      " " +
      element_from_array_two +
      " " +
      element_from_array_three;
  
    //append the p to the div
    poem.appendChild(paragraph);
  
    console.log(
      `${element_from_array_one} \n ${element_from_array_two} \n ${element_from_array_three}`
    );
  }
  
  let btn = document.querySelector("button");
  btn.addEventListener("click", renderpoem);
  