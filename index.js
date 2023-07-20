function distanceFromHqInBlocks(number){
let numberDifference = Math.abs(number - 42);
console.log(numberDifference);
return numberDifference;
}

function distanceFromHqInFeet(number){
    distanceFromHqInBlocks(number);
    let feetDistance = Math.abs(number - 42) * 264;
    console.log(feetDistance);
    return feetDistance;
}

function distanceTravelledInFeet(num1, num2){
   let distanceTraveled = Math.abs(num1 - num2) * 264;
   return distanceTraveled;

}

function calculatesFarePrice(num1, num2){
    let distanceTraveled = distanceTravelledInFeet(num1, num2);
    if (distanceTraveled <= 400){
        return 0;
      }
      else if (distanceTraveled <= 2000){
        return Math.abs((distanceTraveled - 400) * .02);
      }
      else if (distanceTraveled <=2500){
        return 25;
      }
      else (distanceTraveled >2500) 
        return 'cannot travel that far';
      

}

