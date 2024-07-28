

function spotUnique(){

    let str='aabbccdeefgg';

    console.log(str);

    let result='';


    for(let i=0; i<str.length; i++){

        let ch=str.charAt(i);

        if(str.indexOf(ch) === str.lastIndexOf(ch)){
            result=result+ch;
        }
        

    }

    console.log(result);


}


spotUnique();