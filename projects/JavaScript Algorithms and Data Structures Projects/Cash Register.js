// 第一次完成时，用的`if``else`和循环，然后`浮点数的精度`真的很多问题（坑）
function checkCashRegister(price, cash, cid) {
  var change = (cash*100-price*100)/100;
  var changes = [];
  var number;
  while(change > 0) {
      if(change >= 100 && cid[8][1]>=100) {
          change = +(change-100).toFixed(2);
          cid[8][1] = +(cid[8][1]-100).toFixed(2);
          isExist(changes, ['ONE HUNDRED', 100]);
      } else if (change >= 20 && cid[7][1]>=20) {
          change = +(change-20).toFixed(2);
          cid[7][1] = +(cid[7][1]-20).toFixed(2);
          isExist(changes, ['TWENTY', 20]);
      } else if (change >= 10 && cid[6][1]>=10) {
          change = +(change-10).toFixed(2);
          cid[6][1] = +(cid[6][1]-10).toFixed(2);
          isExist(changes, ['TEN', 10]);
      } else if (change >= 5 && cid[5][1]>=5) {
          change = +(change-5).toFixed(2);
          cid[5][1] = +(cid[5][1]-5).toFixed(2);
          isExist(changes, ['FIVE', 5]);
      } else if (change >= 1 && cid[4][1]>=1) {
          change = +(change-1).toFixed(2);
          cid[4][1] = +(cid[4][1]-1).toFixed(2);
          isExist(changes, ['ONE', 1]);
      } else if (change >= 0.25 && cid[3][1]>=0.25) {
          change = +(change-0.25).toFixed(2);
          cid[3][1] = +(cid[3][1]-0.25).toFixed(2);
          isExist(changes, ['QUARTER', 0.25]);
      } else if (change >= 0.1 && cid[2][1]>=0.1) {
          change = +(change-0.1).toFixed(2);
          cid[2][1] = +(cid[2][1]-0.1).toFixed(2);
          isExist(changes, ['DIME', 0.1]);
      } else if (change >= 0.05 && cid[1][1]>=0.05) {
          change = +(change-0.05).toFixed(2);
          cid[1][1] = +(cid[1][1]-0.05).toFixed(2);
          isExist(changes, ['NICKEL', 0.05]);
      } else if (change >= 0.01 && cid[0][1]>=0.01) {
          change = +(change-0.01).toFixed(2);
          cid[0][1] = +(cid[0][1]-0.01).toFixed(2);
          isExist(changes, ['PENNY', 0.01]);
      } else {
          changes.unshift(undefined);
          change = 0;
      }
  }
  if(changes[0] === undefined)
      return 'Insufficient Funds';
  var flag = cid.every(function(val){
      return val[1] === 0;
  });
  if(flag)
      return "Closed";
  return changes;
}
function isExist(arr1, arr2) {
  if(arr1.length === 0)
      return arr1.push(arr2);
  var index = -1;
  for(var i = 0; i < arr1.length; i++) {
      if(arr2[0] === arr1[i][0]) {
          index = i;
          break;
      }
  }
  if(index !== -1) {
      arr1[index][1] =  +(arr1[index][1] + arr2[1]).toFixed(2);
      return arr1;
  }
  return arr1.push(arr2);
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],        0.01
// ["NICKEL", 2.05],        0.05
// ["DIME", 3.10],          0.1
// ["QUARTER", 4.25],       0.25
// ["ONE", 90.00],          1
// ["FIVE", 55.00],         5
// ["TEN", 20.00],          10
// ["TWENTY", 60.00],       20
// ["ONE HUNDRED", 100.00]] 100

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], 
  ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], 
  ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], 
  ["ONE HUNDRED", 100.00]]);