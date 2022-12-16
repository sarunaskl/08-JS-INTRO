function humanYearsCatYearsDogYears(humanYears) {
 
let catYears = 0;
let dogYears = 0;

 for(let i = 1; i <= humanYears; i++){
        if (humanYears === 1) {
          catYears = 15;
          dogYears = 15;
        } else if (humanYears === 2) {
          catYears = 24;
          dogYears = 24;
        } else if (humanYears >= 3) {
          catYears = 24 + ((humanYears - 2 ) * 4);
          dogYears = 24 + ((humanYears - 2 ) * 5);
        }
      }
      return [humanYears, catYears, dogYears];
     
  return [humanYears, catYears, dogYears];
}


