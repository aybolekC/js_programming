
console.log('Test started here');

try {
    console.log(result);
    
} catch (error) {
    console.log('An error has occured during runtime ');
    console.log(error);
}finally {

    console.log('Error handling is completed');
}

console.log('Test ended here');

console.log('--------------------------------------------------------');

console.log('New Test started here');
throw new Error('Throwing a new error because something went wrong in the test');

console.log('Test is completed here');
