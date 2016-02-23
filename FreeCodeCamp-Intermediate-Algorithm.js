/*Sum All Numbers in a Range
We'll pass you an array of two numbers.
Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/
function sumAll(arr) {
    var firstNum;
    var lastNum;
    var sum = 0;
    if(arr[0]<arr[1]){
        firstNum = arr[0];
        lastNum = arr[1];
    }
    else{
        firstNum = arr[1];
        lastNum = arr[0];
    }
    for(var i=firstNum;i<=lastNum;i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);

/*Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the original arrays.
*/
function diff(arr1, arr2) {
    var newArr = arr1.concat(arr2);
  function check(value){
      if(arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1){
          console.log(arr1.indexOf(value));
          console.log(arr2.indexOf(value));
          return value;
      }
  }
  return newArr.filter(check);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]); //[4]
diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); //["diorite", "pink wool"]
diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); //["piglet", 4]
diff([], ["snuffleupagus", "cookie monster", "elmo"]); //["snuffleupagus", "cookie monster", "elmo"]
diff([1, "calf", 3, "piglet"], [7, "filly"]) //[1, "calf", 3, "piglet", 7, "filly"]


/*Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/
function myReplace(str, before, after) {
    var arr = str.split(" ");
    var replace = after;
    if(before[0] === before[0].toUpperCase()){
        replace = after[0].toUpperCase() + after.slice(1);
        console.log(replace);
    }
    for(var i=0;i<arr.length;i++){
        if(arr[i] === before){
            arr.splice(i,1,replace);
        }
    }
    
  return arr.join(" ");
}

myReplace("Let us go to the store", "store", "mall"); //"Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); //"He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling"); //"This has a spelling error".
myReplace("His name is Tom", "Tom", "john") //"His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms"); //"Let us get back to more Algorithms".



/*Finders Keepers
Create a function that looks through an array (first argument)
and returns the first element in the array that passes a truth test (second argument).
*/
function find(arr, func) {
  var filter = arr.filter(func);
  return filter[0];  
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });