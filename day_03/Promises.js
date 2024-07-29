

let checkEligibilityToVote = (age) => {
    //create a promise to check the age
    return new Promise((resolve, reject) => {
        //check if the age is valid
        if (age>=18) {
            resolve('Eligible to vote');
        } else {
            reject('Not Eligible to vote');
        }
    });
}


checkEligibilityToVote(17)
    .then(() => {
        console.log('You can vote for joe or trump');
    })
    .catch(() => {
        console.log('You can not vote today');
    });

    /*
    Promises can help us to avoid using:
                Nested callbacks
                Callbacks Hell
    */