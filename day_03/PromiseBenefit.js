

function getIntoCar(){

    return new Promise((resolve) => {
    console.log('Get into the car');
    resolve();
    });
}

function startCar(){
    return new Promise((resolve) => {
    console.log('Car started');
    resolve();
    });
  
}

function drive(){
    return new Promise((resolve) => {
    console.log('Drive the car');
    resolve();
    });

}

getIntoCar()
.then(() => startCar())
.then(() => drive())
.finally(() => console.log('Reached the destination'));  //Promises are more readable and maintainable 

