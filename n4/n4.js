function telephoneCheck(str) {
    if (str[3] === '-' && str[7] === '-' && str[1] >= '0' && str[1] <= '9') {
          return true;
      }
      if (str[0] === '(' && str[4] === ')' && str[8] === '-' && str[1] >= '0' && str[1] <= '9') {
          return true;
      }
      if (str[0] === '(' && str[4] === ')' && str[5] === ' ' && str[9] === '-' && str[1] >= '0' && str[1] <= '9') {
          return true;
      }
      if (str[3] === ' ' && str[7] === ' ' && str[1] >= '0' && str[1] <= '9') {
          return true;
      }
      if (str.length === 10 && str[1] >= '0' && str[1] <= '9') {
          return true;
      }
      if (str[0] === '1' && str[1] === ' ' && str[5] === ' ' && str[9] === ' ' && str[2] >= '0' && str[2] <= '9') {
          return true;
      }
      
      else return false; 
  }
  
  telephoneCheck("555-555-5555");