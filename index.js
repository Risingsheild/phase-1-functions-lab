function distanceFromHqInBlocks(someValue){
    if (42>someValue)
    {return 42-someValue}
    else {
return (someValue - 42)
}}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264
}
function distanceTravelledInFeet(start, destination){
    if (destination>start){ 
        return (destination-start)*264}
    else {
        return (start-destination)*264
    }
}
function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <=400){
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) >2500){
        return 'cannot travel that far'
    }
    else if (distanceTravelledInFeet(start, destination)>2000){
        return 25
    }
    else if (distanceTravelledInFeet(start, destination)>400){
    return ((distanceTravelledInFeet(start, destination) -400)*.02)
}
}
