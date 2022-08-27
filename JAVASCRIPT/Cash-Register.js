function checkCashRegister(price, cash, cid) {
    let fondosDisponibles = cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1];
    
    let dineroDevolver = cash - price;
    let hundred = cid[8][1];
    let twenty = cid[7][1];
    let ten = cid[6][1];
    let five = cid[5][1];
    let one = cid[4][1];
    let quarter = cid[3][1];
    let dime = cid[2][1];
    let nickle = cid[1][1];
    let penny = cid[0][1];
    
    if (dineroDevolver > fondosDisponibles) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    else if (dineroDevolver == fondosDisponibles) {
      return {status: "CLOSED", change: cid};
    }
    
    else {
      while (dineroDevolver > 0) {
        if (dineroDevolver - 100 >= 0 && hundred > 0) {
          dineroDevolver = dineroDevolver.toFixed(2);
          dineroDevolver = parseFloat(dineroDevolver);
          dineroDevolver = dineroDevolver - 100;
          hundred -= 100;
        }
  
        else if (dineroDevolver - 20 >= 0 && twenty > 0) {
          dineroDevolver = dineroDevolver.toFixed(2);
          dineroDevolver = parseFloat(dineroDevolver);
          dineroDevolver = dineroDevolver - 20;
          twenty -= 20;
        }
  
        else if (dineroDevolver - 10 >= 0 && ten > 0) {
          dineroDevolver = dineroDevolver.toFixed(2);
          dineroDevolver = parseFloat(dineroDevolver);
          dineroDevolver = dineroDevolver - 10;
          ten -= 10;
        }
  
        else if (dineroDevolver - 5 >= 0 && five > 0) {
          dineroDevolver = dineroDevolver.toFixed(2);
          dineroDevolver = parseFloat(dineroDevolver);
          dineroDevolver = dineroDevolver - 5;
          five -= 5;
        }
  
        else if (dineroDevolver - 1 >= 0 && one > 0) {
          dineroDevolver = dineroDevolver.toFixed(2);
          dineroDevolver = parseFloat(dineroDevolver);
          dineroDevolver = dineroDevolver - 1;
          one -= 1;
        }
  
        else if (dineroDevolver - 0.25 >= 0 && quarter > 0) {
          dineroDevolver = dineroDevolver.toFixed(2);
          dineroDevolver = parseFloat(dineroDevolver);
          dineroDevolver = dineroDevolver - 0.25;
          quarter -= 0.25;
        }
  
        else if (dineroDevolver - 0.1 >= 0 && dime > 0) {
          dineroDevolver = dineroDevolver.toFixed(2);
          dineroDevolver = parseFloat(dineroDevolver);
          dineroDevolver = dineroDevolver - 0.1;
          dime -= 0.1;
        }
  
        else if (dineroDevolver - 0.05 >= 0 && nickle > 0) {
          dineroDevolver = dineroDevolver.toFixed(2);
          dineroDevolver = parseFloat(dineroDevolver);
          dineroDevolver = dineroDevolver - 0.05;
          nickle -= 0.05;
        }
  
        else if (dineroDevolver - 0.01 >= 0 && penny > 0) {
          dineroDevolver = dineroDevolver.toFixed(2);
          dineroDevolver = parseFloat(dineroDevolver);
          dineroDevolver = dineroDevolver - 0.01;
          penny -= 0.01;
        }
      }
    }
    let arr = [];
    let aux;
    if (cid[8][1] - hundred != 0) {
      arr.push(["HUNDRED" , cid[8][1] - hundred]);
    }
  
    if (cid[7][1] - twenty != 0) {
      arr.push(["TWENTY" , cid[7][1] - twenty]);
    }
  
    if (cid[6][1] - ten != 0) {
      arr.push(["TEN" , cid[6][1] - ten]);
    }
  
    if (cid[5][1] - five != 0) {
      arr.push(["FIVE" , cid[5][1] - five]);
    }
  
    if (cid[4][1] - one != 0) {
      arr.push(["ONE" , cid[4][1] - one]);
    }
  
    if (cid[3][1] - quarter != 0) {
      arr.push(["QUARTER" , cid[3][1] - quarter]);
    }
  
    if (cid[2][1] - dime != 0) {
      aux = (cid[2][1] - dime).toFixed(1)
      arr.push(["DIME" , parseFloat(aux)]);
    }
  
    if (cid[1][1] - nickle != 0) {
      arr.push(["NICKEL" , cid[1][1] - nickle]);
    }
  
    if (cid[0][1] - penny != 0) {
      aux = (cid[0][1] - penny).toFixed(2)
      arr.push(["PENNY", parseFloat(aux)]);
    }
    console.log(arr)
  
    fondosDisponibles = 0;
    for (let i = 0; i < arr.length; i++) {
      fondosDisponibles += arr[i][1];
    }
  
    if (dineroDevolver > fondosDisponibles) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    else {
      return {status: "OPEN", change: arr};
    }
  
    
  }
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);