

function palindrome() {
    let str = "aybolek";
    
    console.log(str);
    
    let reversedStr = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str.charAt(i);
    }
    
    if (str.toLowerCase() === reversedStr.toLowerCase()) {
        console.log("The string is palindrome");
    } else {
        console.log("The string is not palindrome");
    }
}

// Call the main function
palindrome();