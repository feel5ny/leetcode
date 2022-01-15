/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const moneys = { 5: 0, 10: 0, 20: 0 };
  const LEMONADE_COST = 5;
  
  const calculatePay = (currentChange, doller) => {
    const changeDollerCount = Math.floor(currentChange / doller);
    if(changeDollerCount && moneys[doller] >= changeDollerCount) {
      currentChange -= changeDollerCount * doller;
      moneys[doller] -= changeDollerCount;
    }
    return currentChange;
  }
  
  return bills.every((bill) => {
    moneys[bill]++
    if(bill === LEMONADE_COST) return true;
    
    let currentChange = bill - LEMONADE_COST;
    
    currentChange = calculatePay(currentChange, 10);
    if(!currentChange) return true;
    currentChange = calculatePay(currentChange, 5);
    if(!currentChange) return true;
    return false;
  })
};