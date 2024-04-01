//task 1
//anonymous fuction&IIFE function
//print odd numbers in array an array 

// using anonymous fuction

var result=[]
var a=function (arr){
    for(var i=0;i<arr.length;i++){
     if(arr[i]%2!==0)
   { 
    result.push(arr[i])
   } 
}
return result
}
console.log(a([11,22,33,44,55,66,77,88,99,100]));

//using IIFE function

 var result=[]
var a=(function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
        result.push(arr[i]);
    }
}
console.log(result);
})([1,2,3,4,5,6,7,8,9,10])

// convert all the strings to tittle caps in string array using  anonymous function

var b = ["apple", "orange", "mango", "graphs"];
var titleCapsArray = [];
(function(b, titleCapsArray) {
    for (var i = 0; i < b.length; i++) {
        var word = b[i];
        var titleCasedWord = word.charAt(0).toUpperCase() + word.slice(1);
        titleCapsArray.push(titleCasedWord);
    }
})(b, titleCapsArray);

console.log(titleCapsArray);

//convert all the strings to tittle caps in string array   IIFE function
 
var b = ["apple", "orange", "mango", "graphs"];
var titleCapsArray = [];

(function() {
    for (var i = 0; i < b.length; i++) {
        var word = b[i];
        var titleCasedWord = word.charAt(0).toUpperCase() + word.slice(1);
        titleCapsArray.push(titleCasedWord);
    }
})();

console.log(titleCapsArray);   

//Sum of all numbers in an array using  anonymous function

var numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

var sum = function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

console.log(sum(numbers));

//Sum of all numbers in an array using IIFE function

var numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

var sum = (function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
})(numbers);

console.log(sum);

//Return all the prime numbers in an array using  anonymous function


var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var primes = function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};

var isPrime = function(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(primes(numbers));

//Return all the prime numbers in an array using  IIFE function


var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var primes = (function findPrimes(arr) {
    var result = [];
    
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
})(numbers);

console.log(primes);

//Return all the palindromes in an array  using  anonymous function


var words = ["level", "mom", "world", "madam","dad","map"];

var palindromes = function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};

var isPalindrome = function(word) {
    var len = word.length;
    for (var i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(palindromes(words));

//Return all the palindromes in an array  using  IIFE function

var words = ["level", "mom", "world", "madam","dad","map"];

var palindromes = (function findPalindromes(arr) {
    var result = [];
    
    function isPalindrome(word) {
        var len = word.length;
        for (var i = 0; i < len / 2; i++) {
            if (word[i] !== word[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    for (var i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
})(words);

console.log(palindromes);

// Return median of two sorted arrays of the same size using  anonymous function

var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10];

var median = function(arr1, arr2) {
    var mergedArr = arr1.concat(arr2);
    var len = mergedArr.length;
    var middleIndex = Math.floor(len / 2);
    
    if (len % 2 === 0) {
        return (mergedArr[middleIndex - 1] + mergedArr[middleIndex]) / 2;
    } else {
        return mergedArr[middleIndex];
    }
};

console.log(median(arr1, arr2));

// Return median of two sorted arrays of the same size using  IIFE function


var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10];

var median = (function calculateMedian(arr1, arr2) {
    var mergedArr = arr1.concat(arr2);
    var len = mergedArr.length;
    var middleIndex = Math.floor(len / 2);
    
    if (len % 2 === 0) {
        return (mergedArr[middleIndex - 1] + mergedArr[middleIndex]) / 2;
    } else {
        return mergedArr[middleIndex];
    }
})(arr1, arr2);

console.log(median);

//Remove duplicates from an array using  anonymous function

var arr = [1, 2, 3, 4, 2, 3, 5, 6, 1];

var removeDuplicates = function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(removeDuplicates(arr));


//Remove duplicates from an array using  IIFE function

var arr = [1, 2, 3, 4, 2, 3, 5, 6, 1];

var removeDuplicates = (function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
})(arr);

console.log(removeDuplicates);


//Rotate an array by k times  using  anonymous function

var arr = [1, 2, 3, 4, 5];
var k = 3;

var rotateArray = function(arr, k) {
    var n = arr.length;
    while (k > 0) {
        var lastElement = arr.pop();
        arr.unshift(lastElement);
        k--;
    }
    return arr;
};

console.log(rotateArray(arr, k));

//Rotate an array by k times  using  filter function

var arr = [1, 2, 3, 4, 5];
var k = 3;

var rotatedArray = (function rotate(arr, k) {
    var n = arr.length;
    
    for (var i = 0; i < k; i++) {
        var lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    
    return arr;
})(arr, k);

console.log(rotatedArray);

//using arrow functions 
//Print odd numbers in an array 

var result =[];
 var odd=(arr)=>{
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
         result.push(arr[i])
    }
  }
  return result
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));
//Convert all the strings to title caps in a string array using arrow function

var arr = ["hello world", "how are you", "goodbye"];

const convertToTitleCaps = arr => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }
    return arr;
};

console.log(convertToTitleCaps(arr));

//Sum of all numbers in an array using arrow function
var b = ["apple", "orange", "mango", "graphs"];
var titleCapsArray = [];


((b, titleCapsArray) => {
    for (let i = 0; i < b.length; i++) {
        let word = b[i];
        let titleCasedWord = word.charAt(0).toUpperCase() + word.slice(1);
        titleCapsArray.push(titleCasedWord);
    }
})(b, titleCapsArray);

console.log(titleCapsArray); 

//Sum of all numbers in an array  using arrow function
var numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

var sum = arr => {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

console.log(sum(numbers));

//Return all the prime numbers in an array  using arrow function


var words = ["level", "mom", "world", "madam", "dad", "map"];

var palindromes = (() => {
    var result = [];
    
    const isPalindrome = word => {
        var len = word.length;
        for (var i = 0; i < len / 2; i++) {
            if (word[i] !== word[len - 1 - i]) {
                return false;
            }
        }
        return true;
    };

    for (var i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            result.push(words[i]);
        }
    }

    return result;
})();

console.log(palindromes);

//Return all the prime numbers in an array using arrow function

var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var primes = ((arr) => {
    var result = [];
    
    const isPrime = (num) => {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
})(numbers);

console.log(primes);

//Return all the palindromes in an array using arrow function

const words1 = ["level", "mom", "world", "madam","dad","map"];

const palindromes1= ((arr) => {
    const result = [];
    
    const isPalindrome = (word) => {
        const len = word.length;
        for (let i = 0; i < len / 2; i++) {
            if (word[i] !== word[len - 1 - i]) {
                return false;
            }
        }
        return true;
    };

    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
})(words1);

console.log(palindromes); 
