function convertToRoman(num) {
    var numero = '';
      if (num/1000 >= 1) {
        for (let i = 0; i < num/1000; ++i) {
          numero += 'M';
          num -= 1000;
        }
      }
      if (num/900 >= 1) {
        for (let i = 0; i < num/900; ++i) {
          numero += 'CM';
          num -= 900;
        }
      }
      if (num/500 >= 1) {
        for (let i = 0; i < num/500; ++i) {
          numero += 'D';
          num -= 500;
  
        }
      }
      if (num/400 >= 1) {
        for (let i = 0; i < num/400; ++i) {
          numero += 'CD';
          num -= 400;
  
        }
      }
      if (num/100 >= 1) {
        for (let i = 0; i < num/100; ++i) {
          numero += 'C';
          num -= 100;
  
        }
      }
      if (num/90 >= 1) {
        for (let i = 0; i < num/90; ++i) {
          numero += 'XC';
          num -= 90;
  
        }
      }
      if (num/50 >= 1) {
        for (let i = 0; i < num/50; ++i) {
          numero += 'L';
          num -= 50;
  
        }
      }
      if (num/40 >= 1) {
        for (let i = 0; i < num/40; ++i) {
          numero += 'XL';
          num -= 40;
  
        }
      }
      if (num/10 >= 1) {
        for (let i = 0; i < num/10; ++i) {
          numero += 'X';
          num -= 10;
  
        }
      }
      if (num/9 >= 1) {
        for (let i = 0; i < num/9; ++i) {
          numero += 'IX';
          num -= 9;
  
        }
      }
      if (num/5 >= 1) {
        for (let i = 0; i < num/5; ++i) {
          numero += 'V';
          num -= 5;
  
        }
      }
      if (num/4 >= 1) {
        for (let i = 0; i < num/4; ++i) {
          numero += 'IV';
          num -= 4;
  
        }
      }
      if (num >= 1) {
        for (let i = 0; i < num; ++i) {
          numero += 'I';
  
        }
      }
   return numero;
  }
  
  convertToRoman(36);