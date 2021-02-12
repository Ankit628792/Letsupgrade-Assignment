
console.log(1 + "2" + "2"); //the output is 122 because of 1,2,2 behaves as string
console.log(1 + +"2" + "2");  //the output is 32 because first addition of 1 and 2 performed. Secondly, string concatination occur
console.log(1 + -"1" + "2");  //the output is 02 because first subtraction of 1 and 1 performed. Secondly, string concatination occur
console.log(+"1" + "1" + "2");  //the output is 112 because of 1,2,2 behaves as string
console.log( "A" - "B" + "2");  //the output is NaN2 because subtraction of string is not possible and 2 will be remains same
console.log( "A" - "B" + 2);  //the output is NaN because subtraction of string is not possible and addition of NaN with integer is always NaN
