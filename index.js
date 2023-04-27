//Problem 1: Let’s play a mind game

function mindGame(num) {
    let result = (num * 3 + 10) / 2;
    result -= 5;
    return result;
}
let userInput = 5;
let totalResult = mindGame(userInput);
console.log(totalResult)


//Problem 2: Finding even or odd

/*function evenOdd(str) {
    let even = str.length;
    let odd = str.length;
    if (str.length % 2 == 0) {
        even = "even";
        return even;
    }
    else {
        odd = 'odd';
        return odd;
    }
}

let userInput = ('Phero');
let userInputResult = evenOdd(userInput);
console.log(userInputResult);


//Problem 3: Is Less or Greater than seven

function isLGSeven(num) {
    let result = num - 7;
    if (result < 7) {
        num = num - 7;
        return num;
    } else {
        return 2 * num;
    }
}
let userInput = 6;
let validResult = isLGSeven(userInput);
console.log(validResult);


//Problem 4: Finding Bad data

function findingBadData(age) {
    let negativeCount = 0;
    age.forEach(function(num) {
      if (num < 0) {
        negativeCount++;
      }
    });
    return negativeCount;
  }
  let ages =  [ 1,2,3];
  let count = findingBadData(ages);
  console.log(count); 
   

//Problem 5: Convert your gems into diamond

function gemsToDiamond(gems1, gems2, gems3) {
    const conversionRate1 = 21;
    const conversionRate2 = 32;
    const conversionRate3 = 43;

    let totalDiamonds = 0;
    let diamonds1 = Math.floor(gems1 * conversionRate1);
    totalDiamonds += diamonds1;

    let diamonds2 = Math.floor(gems2 * conversionRate2);
    totalDiamonds += diamonds2;

    let diamonds3 = Math.floor(gems3 * conversionRate3);
    totalDiamonds += diamonds3;

    if (totalDiamonds > 1000) {
        return totalDiamonds - 2000;
    } else {
        return totalDiamonds;
    }
}

console.log(gemsToDiamond(1, 1, 1));
*/
