

function anagram() {
    let str1 = "heart";
    let str2 = "earth";
    console.log(str1);
    console.log(str2);

    let arr1 = str1.split('');
    let arr2 = str2.split('');

    console.log(JSON.stringify(arr1));
    console.log(JSON.stringify(arr2));

    arr1.sort();
    arr2.sort();

    console.log(JSON.stringify(arr1));
    console.log(JSON.stringify(arr2));

    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
        console.log("Anagram");
    } else {
        console.log("Not Anagram");
    }
}

anagram();