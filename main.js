//  * `xify` - returns the same string, but with every character replaced by an 'x'
//   * Examples:
// * xify('hello') -> 'xxxxx'
// * xify('hi there') -> 'xxxxxxxx'

console.log(xify("hi there"))

function xify(str) {
    
    let strX = "";
    for (let count = 0; count < str.length; count++) {
        strX += 'x'
    }
    return strX;
}  

// * `yellingChars` - returns the given string with an exclamation point after each character
//   * Examples:
//     * yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
//     * yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
//   * Hints:
//     * We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.

console.log(yellChar("oh hello"));

function yellChar(str) {
    let strX1 = "";

    for (let count = 0; count < str.length; count++) {
        
        strX1 += str[count] + "!";
        


    }
    return strX1;


}


// * `indexedChars` - adds the index of each character before that character in the given string
//   * Examples:
// * indexedChars('hello') -> '0h1e2l3l4o'
// * indexedChars('bye') -> '0b1y2e'
// * Hints: 
// * We can add something BEFORE the current character as well!

console.log(indexChar("hello"));

function indexChar(str) {
    let strX2 = ""

    for (let count = 0; count < str.length; count++) {
        strX2 += count + str[count];
        
    }
    return strX2;

}



// * `numberedChars` - adds the number of each character before that character in the given string
//   * Examples:
//     * numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
//     * numberedChars('bye') -> '(1)b(2)y(3)e'
//   * Hints: 
//     * there's a simple relationship between the index and the number... indices are 0-based counting and numbers are 1-based... you'll figure it out!

//    index          01234
console.log(numChar("hello"));

function numChar(str) {
    let strx3 = ""

    for (let count = 0; count < str.length; count++) {
        strx3 += "(" + ((1) + count) + ")";
        strx3 += str[count];
        
    }
    return strx3;
}




// * `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
//   * Examples:
//     * exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
//     * exclaim('This is fine.') -> 'This is fine!'

// console.log(exclaim("What are you doing? Are you a fool? This is fine."));

function exclaim(str) {
    let strX4 = ""

    for (let count = 0; count < str.length; count++) {
        
        if (str[count] === "?" || str[count] === ".") {
            strX4 += "!";
        } else {
            strX4 += str[count];
        }
        
    }
    return strX4;
}








// * `repeatIt` - returns the given string repeated `n` times, where `n` is the second parameter
//   * Examples:
//     * repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
//     * repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'


console.log(repeatIt("beetlejuice", 3))

function repeatIt(str, n) {

    let strX5 = ""

    for (let count = 0; count < n; count++) {
        strX5 += str;
        
        
    }
    return strX5;
}










// * `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
//   * Examples:
//     * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
//  * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."

truncate("The fault, dear Brutus, is not in our stars, but in ourselves.");

function truncate(str) {
    let strX6 = ""

    for (let count = 0; count < 15; count++) {
        strX6 += str[count] 
        
    }
    return console.log(strX6 + "...");
}






// * `ciEmailify` - creates an email from a two-part name
//   * Examples:
//     * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
//     * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'

ciEmailify("Leah Sanchez");

function ciEmailify(str) {
    let strX7 = ""

    for (let count = 0; count < str.length; count++) {
        
        if (str[count] === " ") {
            strX7 += "."
        } else {
            strX7 += str[count];
        }
    }
    return console.log(strX7 + "@codeimmersives.com");
}





// * `reverse` - reverses the given string
//   * Examples:
//     * reverse('colin') -> 'niloc'
//     * reverse('mesuara') -> 'arausem'

console.log(reverse("colin"));

function reverse(str) {
    let strX8 = ""

    for (let count = str.length-1; count >= 0; count--) {
        strX8 += str[count];
        
    }
    return strX8;
}







// * `onlyVowels` - returns only the vowels from a word
//   * Examples:
//     * onlyVowels('Colin Jaffe') -> 'oiae'
//     * onlyVowels('quickly') -> 'ui'
//     * onlyVowels('Anthony DeRosa') -> 'Aoeoa'

console.log(onlyVowels("Leah Nicole Sanchez"));

function onlyVowels(str) {
    
    let strX9 = ""

    for (let count = 0; count < str.length; count++) {
        
        if (str[count] === "A" || str[count] === "a" || str[count] === "E" || str[count] === "e" || str[count] === "I" || str[count] === "i" || str[count] === "O" || str[count] === "o" || str[count] === "U" || str[count] === "u") {
            strX9 += str[count];
        }
    
    }
    return strX9;
}


// * `crazyCase` - returns the given string with alternating lower and upper cases
//   * Examples:
//     * crazyCase('hello') -> 'hElLo'
//     * crazyCase('multiple words here') -> 'mUlTiPlE WoRdS HeRe'
//     * crazyCase('YELLING') -> 'yElLiNg'


crazyCase("hello")
crazyCase("multiple words here")

function crazyCase(str) {

    let strX10 = ""

    for (let count = 0; count < str.length; count++) {
         
        if (count % 2 === 0) {

            strX10 += str[count].toUpperCase();
            
        } else  {
             strX10 += str[count].toLowerCase();
        }
        
    }
    return console.log(strX10);
}

// * `titleCase` - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased
//   * Examples:
//     * titleCase('return of the king') -> 'Return Of The King'
//     * titleCase('cOde iMMerSives') -> 'Code Immersives'


titleCase("return of the king");
titleCase("cOde iMMerSives");

function titleCase(str) {
    
    let strX11 = ""

    for (let count = 0; count < str.length; count++) {
        
        if (count === 0) {

            strX11 += str[count].toUpperCase();
            
        } else if (str[count] === " ") {
            strX11 += str[count];
            strX11 += str[count+=1].toUpperCase();

        } else {
            
            strX11 += str[count].toLowerCase();

        }
        
    }
    return console.log(strX11);
}



// * `camelCase` - returns the given string in camel case
//   * Examples:
//     * camelCase('oh Hello') -> 'ohHello'
//     * camelCase('well yeah of course') -> 'wellYeahOfCourse'
//     * camelCase('Boy howdy') -> 'boyHowdy'

camelCase("oh Hello");
camelCase("well yeah of course");
camelCase("Boy howdy"); 

function camelCase(str) {

    let strX12 = ""

    for (let count = 0; count < str.length; count++) {
        
        if (count === 0) {
            strX12 += str[count].toLowerCase();
        } else if (str[count] === " ") {
            strX12 += str[count+=1].toUpperCase();
        } else {
            strX12 += str[count].toLowerCase();
        }
    
        
    }
    return console.log(strX12);
}


// * `crazyCase2ReturnOfCrazyCase` - same as `crazyCase`, but does NOT count spaces as letters to upper or lower case (see examples below!)
//   * Examples:
//     * crazyCase2ReturnOfCrazyCase('multiple words here') -> 'mUlTiPlE wOrDs HeRe'
//     * crazyCase2ReturnOfCrazyCase('crazy stuff') -> 'cRaZy StUfF'

crazyCase2ReturnOfCrazyCase('multiple words here');
crazyCase2ReturnOfCrazyCase('crazy stuff');

function crazyCase2ReturnOfCrazyCase(str) {

    let strX13 = "";
    let n = 0;

    for (let count = 0; count < str.length; count++) {

        if (str[count] === " ") {
            n = n + 1;
        } 


        if (n % 2 === 0) {

            strX13 += str[count].toUpperCase();
            
        } else {
            strX13 += str[count].toLowerCase();
        }
        n+=1
    }
    return console.log(strX13);
}