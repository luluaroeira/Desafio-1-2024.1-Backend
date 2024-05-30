function palindrome(str) {
    return str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '').toLowerCase();
  }
  
  function isPalindrome(str) {
      let cleanedStr = removeSpacesAndLowercase(str);
      let n = cleanedStr.length;
  
      for (let i = 0; i < n / 2; ++i) {
          if (cleanedStr[i] !== cleanedStr[n - i - 1]) {
              return false;
          }
      }
      return true;
  }
  
  palindrome("eye");