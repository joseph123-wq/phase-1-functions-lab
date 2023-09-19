
function distanceFromHqInBlocks(location) {
    const hqLocation = 42;
    const distance = Math.abs(location - hqLocation);
    
    
    if (location < hqLocation) {
      return distance;
    } else {
      return distance;
    }
  }
  


function distanceFromHqInFeet(blocks) {
  const hqStreet = 42; 
  const feetPerBlock = 264;

  return Math.abs(hqStreet - blocks) * feetPerBlock;
}




function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264;
  return Math.abs(startBlock - endBlock) * feetPerBlock;
}





function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264;
  const freeFeet = 400;
  const baseFare = 2;
  const maxDistance = 2500; 
  const maxCharge = 25;
  const distanceInFeet = Math.abs(start - destination) * feetPerBlock;
  if (distanceInFeet > maxDistance) {
    return 'cannot travel that far';
  }
  if (distanceInFeet <= freeFeet) {
    return 0;
  } else if (distanceInFeet <= 2000) {
    const charge = (distanceInFeet - freeFeet) * (baseFare / 100); 
    return parseFloat(charge.toFixed(2));
  } else {
    return maxCharge;
  }
}
