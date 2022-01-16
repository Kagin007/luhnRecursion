//credit card: 7992739871

//put numbers an array

//have an odd/even checker that decides if the number should be multiplied by two. first number * 2.

//if number length is 2 digits, add those two digits together

//add all the 'products' together

//if the final number is divisible by 10, it is a credit card! Woot!


//possible recurssive approach...

const check = (num) => {
  const numArray = num.toString().split('')

  let accumulator = 0;
  let counter = 0;

  for (let x of numArray) { 
    counter++   
    if (counter % 2 === 0) {      
      let newNum = Number(x) * 2;
      if (newNum >= 10) {
        let stringify = newNum.toString();
        let stringArray = stringify.split('')
        let firstNum = stringArray[0];
        let secondNum = stringArray[1];
        let sum = (Number(firstNum) + Number(secondNum))
        accumulator += sum
      } else {
        accumulator += newNum
      }
    } else {
      accumulator += Number(x)
    }    
  }
  let checkDigit = 10 - accumulator % 10
  return checkDigit
};

module.exports = check;
