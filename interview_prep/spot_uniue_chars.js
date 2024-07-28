

function uniqueChars() {
    let str = "aabccdee";
    
    console.log(str);
    
    let unique = "";
    
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        
        if (str.indexOf(ch) === str.lastIndexOf(ch)) {
            unique = unique + ch;
        }
    }
    
    console.log(unique);
}

// Call the main function
uniqueChars();