/*FreeCodeCamp Basic Algorithm Scripting*/


/*Reverse a String*/

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello") //should return a string.
reverseString("hello") //should become "olleh".
reverseString("Howdy") //should become "ydwoH".
reverseString("Greetings from Earth") //should return "htraE morf sgniteerG".

/*Factorialize a Number*/
function factorialize(num) {
  var factorial = 1;
  for(var i=1;i<=num;i++){
    factorial *= i;
  }
  console.log(factorial);
  return factorial;
}

factorialize(5);



/*Check for Palindromes*/
function palindrome(str) {
  var newStr = str.replace(/[^a-zA-Z|0-9]/g,"").toLowerCase();
  var reverse = newStr.split("").reverse().join("");
  return newStr === reverse;
}
palindrome("A man, a plan, a canal. Panama");

/*Find the Longest Word in a String*/
function findLongestWord(str) {
  var arr=str.split(" ");
  var longest = 0;
  for(i=0;i<arr.length;i++){
    console.log(arr[i]);
    if (arr[i].length >=longest){
      longest = arr[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog") //should return 6.
findLongestWord("May the force be with you") //should return 5.
findLongestWord("Google do a barrel roll") //should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") //should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") //should return 19.


/*Title Case a Sentence*/
function titleCase(str) {
  var arr= str.toLowerCase().split(" ");
  for(i=0;i<arr.length;i++){
   arr[i]=arr[i].replace(arr[i].charAt(0),arr[i].charAt(0).toUpperCase());
  }
    title = arr.join(" ")
    return title;
}

titleCase("I'm a little tea pot") //should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") //should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") //should return "Here Is My Handle Here Is My Spout".



/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array
*/
function largestOfFour(arr) {
    var largestarr = [];
    var num = 0;
    for(i=0;i<arr.length;i++){
      var subarr = arr[i];
      for(x=0;x<subarr.length;x++){
          if(subarr[x]>=num){
              num = subarr[x];
          }
      }
      largestarr[i] = num;
  }
  return largestarr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) //should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) //should return [9, 35, 97, 1000000].


/*Confirm the Ending*/
function end(str, target) {
  //check end substring length
  var substrLength = target.length;
  console.log(substrLength);
  //find last word to compare
  var startStrIndex = str.length - substrLength;
  console.log(startStrIndex);
  return str.substr(startStrIndex,substrLength) === target;
}

end("Connor", "n") //should return false.
end("Walking on water and developing software from a specification are easy if both are frozen", "specification") //should return false.
end("He has to give me a new name", "name") //should return true.
end("He has to give me a new name", "me") //should return true.
end("He has to give me a new name", "na") //should return false.
end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") //should return false.

/*Repeat a string repeat a string*/
function repeat(str, num) {
  var repeatedStr = "";
  for(i=0;i<num;i++){
    repeatedStr += str;
  }
  return repeatedStr;
}

repeat("*", 3) //should return "***".
repeat("abc", 3) //should return "abcabcabc".
repeat("abc", 4) //should return "abcabcabcabc".
repeat("abc", 1) //should return "abc".
repeat("*", 8) //should return "********".
repeat("abc", -2) //should return "".


/*Truncate a string*/
function truncate(str, num) {
  var newStr = str.slice(0,num-3)+"...";
  if(str.length>num ){
    if(num<=3){
      var shortTitle = str.slice(0,num)+"...";
      console.log(shortTitle);
   return shortTitle; 
    }
    return newStr;
  }
  else{
    return str;
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11) //should return "A-tisket...".
truncate("Peter Piper picked a peck of pickled peppers", 14) //should return "Peter Piper...".
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) //should return "A-tisket a-tasket A green and yellow basket".
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) //should return "A-tisket a-tasket A green and yellow basket".
truncate("A-", 1) //should return "A...".
truncate("Absolutely Longer", 2) //should return "Ab...".

/*
Chunky Monkey
Write a function that splits an array (first argument)
into groups the length of size (second argument)
and returns them as a multidimensional array.
*/
function chunk(arr, size) {
    var subArr=[];
    var resultArr =[];
    for(var i=0;i<arr.length;i+=size){
        subArr = arr.slice(i,i+size);
        console.log(subArr);
        resultArr.push(subArr);
        console.log(resultArr);
    }
    return resultArr;
}

chunk(["a", "b", "c", "d"], 2) //should return [["a", "b"], ["c", "d"]].
chunk([0, 1, 2, 3, 4, 5], 3) //should return [[0, 1, 2], [3, 4, 5]].
chunk([0, 1, 2, 3, 4, 5], 2) //should return [[0, 1], [2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5], 4) //should return [[0, 1, 2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5, 6], 3) //should return [[0, 1, 2], [3, 4, 5], [6]].
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

/*
Slasher Flick
Return the remaining elements of an array after chopping off n elements from the head.
The head meaning the beginning of the array, or the zeroth index.
*/
function slasher(arr, howMany) {
    var newArr = arr;
    var resultArr =[];
    resultArr = arr.splice(0,howMany);
    return newArr;
}

slasher([1, 2, 3], 2) //should return [3].
slasher([1, 2, 3], 0) //should return [1, 2, 3].
slasher([1, 2, 3], 9) //should return [].
slasher([1, 2, 3], 4) //should return [].

/*
Mutations
Return true if the string in the first element of the array contains
all of the letters of the string in the second element of the array.
*/
function mutation(arr) {
  var target = arr[0].toLowerCase();
  var test = arr[1].toLowerCase().split("");
  var counter = 0;

  for(var i=0;i<test.length;i++){
    var result = target.indexOf(test[i]);
    if(result>=0){
        counter++;
    }
  }
    console.log(counter);
    return counter === test.length;
}

mutation(["hello", "hey"]) //should return false.
mutation(["hello", "Hello"]) //should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) //should return true.
mutation(["Mary", "Army"]) //should return true.
mutation(["Mary", "Aarmy"]) //should return true.
mutation(["Alien", "line"]) //should return true.
mutation(["floor", "for"]) //should return true.
mutation(["hello", "neo"]) //should return false.


/*Falsy Bouncer
Remove all falsy values from an array.
Falsy values in javascript are false, null, 0, "", undefined, and NaN.
*/
function bouncer(arr) {
  function checkBoolean(arr){
    console.log(Boolean(arr));    
    return Boolean(arr);
  }
  var filtered = arr.filter(checkBoolean);
  return filtered;
}

bouncer([7, "ate", "", false, 9]);


/*Seek and Destroy
Remove all elements from the initial array that are of the same value as these arguments.
*/
function destroyer(arr,value1,value2,value3) {
    var newarr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] != value1 && arr[i] != value2 && arr[i] != value3){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3) //[1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) //[1,5,1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5) //[1]
destroyer([2, 3, 2, 3], 2, 3) //[]
destroyer(["tree", "hamburger", 53], "tree", 53) //["hamburger"]


/*Where do I belong 

Return the lowest index at which a value (second argument)
should be inserted into an array (first argument) once it has been sorted.

For example, where([1,2,3,4], 1.5) should return 1
because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, where([20,3,5], 19) should return 2
because once the array has been sorted it will look like [3,5,20]
and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function where(arr, num) {
    var newarr = arr.sort(function compareNumbers(a, b) {
  return a - b;
});
  var numIndex;
console.log(newarr);
  for (var i=0;i<arr.length;i++){
      if(arr[i]>=num){
          console.log(arr[i]);
          numIndex = arr.indexOf(arr[i]);
          break;
      }
      else{
         numIndex = arr.length;
      }
  }
  return numIndex;
}

where([10, 20, 30, 40, 50], 35) // 3.
where([10, 20, 30, 40, 50], 30) // 2.
where([40, 60], 50) // 1.
where([3, 10, 5], 3) // 0.
where([5, 3, 20, 3], 5) // 2.
where([2, 20, 10], 19) // 2.
where([2, 5, 10], 15) // 3.

