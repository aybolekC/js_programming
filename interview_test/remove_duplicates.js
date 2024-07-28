

function removeDuplicates(){


    let str='ABCABCABC';

    console.log(str);

    let result='';

    for(let i=0; i< str.length; i++){

        let ch=str.charAt(i);

        if(result.includes(ch)){
            continue;
        }
        result+=ch;


    }

    console.log(result);


}


removeDuplicates();