/* const calculateAgeInDogYears = (ageOfPerson) => {
  const ageInDogYears = ageOfPerson + 10
  console.log(ageInDogYears)
}

calculateAgeInDogYears(56) */

/*const bestInShow  = (breed) => {
  const dogBreed = breed; 
  if (dogBreed == "schnauzer") {return "My favorite dog breed is schnauzer.";
    } else if (dogBreed == "meow") {return "I like cats."} else {return "Come here puppy."}
    console.log(dogBreed)
}
console.log(bestInShow("meow"))
console.log(bestInShow("schnauzer"))
console.log(bestInShow("german shepherd")) */

/*const addSum = (num1, num2) => {
 const totalSum = num1 + num2;
 return totalSum

}

console.log(addSum(13, 15)) */


/* const addSum = (num2, num3, num1) => {
  const totalSum = num1 + num3 + num2;
  return totalSum
 
 }
 
 console.log(addSum(15, 11, 17)) */


/*const go = (direction, speed) => {
  
  if (speed > 75) {return `The car is moving ${direction} at ${speed} mph. SLOW DOWN!!`} 
 else if (speed == 45 && direction == "forward") {return `The car is moving ${direction} at ${speed} mph.`} 
  else if (speed == 8 && direction == "backwards") {return `The car is moving ${direction} at ${speed} mph.`} 
  else if (speed == 12 && direction == "circles") {return `The car is moving ${direction} at ${speed} mph.`} 
  else {return `The car is moving ${direction} at ${speed} mph.`}  

} console.log(go("backwards", 50)) */



//  const evenOdd = (number) => {
   
//   if (number % 2 === 0) {return "even"}  
//   else {return "odd"}
  
// }

// console.log(evenOdd(23))
 

/* const ListOfNumbers = [1,3,5,4,6,8,12,13,19,20,25,10]
const evenOdd = (number) => {
  
  for (const number of ListOfNumbers) {
  if (number % 2 === 0) {return "even"}  
  else {return "odd"}
  }
}  */



/* const words = [
  "The", "killing", "complex", "houses",
  "married", "kittens", "and", "single",
  "soldiers", "and", "their", "kleptomaniacal",
  "families"
]

const filterOutKWords = (arrayOfWords) => {
let wordsWithoutK = []
for (const word of arrayOfWords) {if (!word.startsWith("k")) { wordsWithoutK.push[word] }}

return wordsWithoutK
}

let testingFunction = (filterOutKWords(word))
console.log(testingFunction);

const singleStringBuilder = () => {
  let joined = arrayOfstrings.join(" ")
  return joined


}

let testing = singleStringBuilder(words)
console.log(testing); */

/* const filterOutKWordsWithForEach = (arrayOfWOrds) => {
    let wordsWithoutK =[]
    arrayOfWords.forEach(word => {
    if (!word.startsWith("k")) {
      wordsWithoutK.push(word)

    }

    });
return wordsWithoutK

} */


const constitutionPreamble = ["We", "the", "kick", "People", "of", "the", "United", "States,", "king", "in", "Order", "to", "form", "a", "more", "perfect", "Union,", "establish", "Justice,", "kat", "insure", "domestic", "Tranquility,", "provide", "for", "kid", "kill", "the", "common", "defence,", "kountry", "promote", "the", "general", "Welfare,", "and", "secure", "kandykorner", "the", "Blessings", "of", "Liberty", "to", "ourselves", "koala", "and", "our", "Posterity,", "do", "ordain", "and", "establish", "this", "Constitution", "kidzKorner", "for", "the", "kraazyy", "United", "States", "of", "America."]

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]


    // Function to filter out `k` words
    // (Google 'javascript startswith' to get started)

/* const filterOutKWords = (arrayOfWords) => {
    let wordsWithoutK = []
    //using a for...of this time to push non-k words to wordsWithoutK array
    for (const word of arrayOfWords) {
        if (!word.startsWith("k")) {
            wordsWithoutK.push(word)
        }
    }
    return wordsWithoutK
} */


//SAME FUNCTION AS ABOVE BUT WRITTEN WITH A FOREACH
//declaring the function
const filterOutKWordsWithForEach = (arrayOfWords) => {
    let wordsWithoutK = []
    //using a forEach this time to push non-k words to wordsWithoutK array
    arrayOfWords.forEach((word) => {
        if (!word.startsWith("k")) {
            wordsWithoutK.push(word)
        }
    });
    return wordsWithoutK
}
//invoking and giving the function the ACTUAL array of words
filterOutKWordsWithForEach(constitutionPreamble);



    // Function to build a single string from the array
    // (Google 'javascript combine all items in array' to get started)
 

const singleStringBuilder = (arrayOfStrings) => {
    let joined = arrayOfStrings.join(" ")
    return joined
}



    // Invoke the filtering function and store its return value

let filteringFunctionForWordsArray = filterOutKWordsWithForEach(words)
let filteringFunctionForConstitutionPreambleArray = filterOutKWordsWithForEach(constitutionPreamble)


  //  Invoke the string building function, and pass the
  //  return value of the previous function as an argument

console.log(singleStringBuilder(filteringFunctionForWordsArray))
console.log(singleStringBuilder(filteringFunctionForConstitutionPreambleArray))



//example of random function with 3 parameters
const tellMeAboutYourDog = (name, genderProunoun, weight) => {
    console.log(`My dog weighs ${weight} lbs, and ${genderProunoun} name is ${name}.`)
}

tellMeAboutYourDog("Roscoe Dash", "his", 90)  




