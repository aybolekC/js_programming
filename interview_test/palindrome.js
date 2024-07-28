

function palindrome(){

    let str='aybolek';

    // let str='LeVEl';

    console.log(str);

    let reversedStr='';


    for(let i=str.length-1; i>=0; i--){

        reversedStr+=str.charAt(i);

    }

    console.log(reversedStr);

    if(str.toLowerCase() ===reversedStr.toLowerCase()){
        console.log('Palindrome');
    }else
    console.log('Not Palindrome');








}



palindrome();