//1

function reverseString(str) {
    let revStr = str.split('').reverse().join('');
    return revStr;
}

console.log(reverseString("AHUT"));

//2

function countVowel(str) {
    let cnt = 0;
    str = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
            cnt++;
        }
    }

    return cnt;
}

console.log(countVowel('BANGLADESH'));

//3
function checkPalindrome(str){
    let revStr ='';
    for(let i =str.length -1; i>=0;i--){
        revStr += str[i];
    }

    return str === revStr;
}

console.log(checkPalindrome('level'));


//4

function findMaxNumber(arr){
    let maxNum = arr[0];

    for(let i=1; i<arr.length;i++){
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    }
    return maxNum;
}
console.log(findMaxNumber([1,2,3,4,52]))

//5
function removeDuplicates(arr){
    let uniqueArray = [];

    for(let i=0;i<arr.length;i++){
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}


console.log(removeDuplicates([1,2,2,3,4,4,5,5]));



//6
function sumOfArray(arr){
    let sum =0;
    for (i=0;i<arr.length;i++){
        sum +=arr[i];
    }

    return sum;
}


console.log(sumOfArray([1,2,3,4,5]));
//7
function findEvenNumber(arr) {
    let evenNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumber.push(arr[i]);
        }
    }

    return evenNumber;
}

console.log(findEvenNumber([11, 12, 13, 14, 15, 16]));

//8
function capitalizeWords(str) {
  let w = str.split(" ");
  let result = [];

  for (let i = 0; i < w.length; i++) {
    let w = w[i];
    result.push(w[0].toUpperCase() + w.slice(1));
  }

  return result.join(" ");
}

console.log(capitalizeWords("hello world"));

//9

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}


console.log(factorial(5));


//10
function pingpongChallenge() {

    let arr = []
    for (let i = 1; i <= 20; i++) {

        if (i % 3 === 0 && i % 5 === 0) {

            arr.push('PingPong');

        } else if (i % 3 == 0) {

            arr.push('Ping');

        } else if (i % 5 == 0) {

            arr.push('Pong');
        }
        else {
            arr.push(i);

        }
    }
    console.log(arr.join(", "));
    
}

pingpongChallenge();