
function sumDigit(){

    let str='A1B2C3D4';    
    console.log(str);

    let sum=0;

    for(let i=0; i<str.length; i++){

        let ch=str.charAt(i);

        if(!isNaN(parseInt(ch))){
            sum+=parseInt(ch);
        }

    }

    console.log(sum);

}

sumDigit();