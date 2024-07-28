

function reverseString() {
    let str = "Hello World!";
    
    console.log(str);
    
    let reversedStr = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str.charAt(i);
    }
    
    console.log(reversedStr);
}

// Call the main function
reverseString();