
        //ARROW FUNCTION:
//a.print odd number in on array.

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

//OUTPUT:3 5 15 17


//b.convert all the strings to title caps in a string array

const stringArray = ["hello world", "goodbye world"];
const titleCaseArray = stringArray.map(str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
console.log(titleCaseArray);



//c.sum of all numbers in an array
const arr = [1, 2, 3, 4];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);


 //d.Return all the prime number in an array.
   const newArray = [1, 3, 2, 5, 10];
   const isPrime = num => {
     for (let i = 2; i < num; i++) {
       if (num % i === 0) return false;
     }
     return num !== 1;
   };
   const myPrimeArray = newArray.filter(isPrime);
   console.log(myPrimeArray);
   
   

   //e.Return all the palindromes in an array.

   const ar = ["racecar", "level", "deified", "civic", "hello","radar","car", "madam"];
const isPalindrome = str => str === str.split("").reverse().join("");
const palindromes = ar.filter(isPalindrome);
console.log(palindromes); 