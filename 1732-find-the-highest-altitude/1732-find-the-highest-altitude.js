/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    return gain.reduce((highestAltitude, altitude, index) => {
          const netGain = altitude + highestAltitude.netGain;
          if(netGain > highestAltitude.highestNetGain){
              highestAltitude.highestNetGain = netGain;
          }
          highestAltitude.netGain = netGain;
          return highestAltitude
    }, { netGain: 0, highestNetGain: 0 }).highestNetGain
};