

async function findElement(locator) {

    let promise = new Promise((resolve, reject) => {

        if(locator === 'valid-locator') {
            resolve('Element found');
        }else{
            reject('Element not found');
        }
    });

    return promise;
}



async function clickElement(locator) {

    findElement(locator)
    .then(() => {
        console.log('Element clicked....');
    })
    .catch(() => {
        console.error('Unable to click element');
    }); 
}



async function runTest() {
    await clickElement('valid-locator');
    await clickElement('invalid-locator');
}